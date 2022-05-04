import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {GraphQLResult, GRAPHQL_AUTH_MODE} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";
import {
  StripeCardElement,
  StripeCardElementChangeEvent,
  StripeCardElementOptions,
} from "@stripe/stripe-js";
import {Dispatch, FormEvent, Fragment, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../appStore/hooks";
import {RootState} from "../../../appStore/store";
import styles from "./CheckoutForm.module.css";
import {emptyCart} from "../../../appStore/slices/cartSlice";
import {createOrder, createOrderItem} from "../../../graphql/mutations";
import {uuidv7} from "uuidv7";
import LoaderIcon from "../../ui/icons/LoaderIcon";

type Props = {
  setIsProcessing: Dispatch<React.SetStateAction<boolean>>;
  isProcessing: boolean;
  setisOrderSucceeded: Dispatch<React.SetStateAction<boolean>>;
};

const CheckoutForm = (props: Props) => {
  const [isPlaceOrderBtnDisabled, setIsPlaceOrderBtnDisabled] =
    useState<boolean>(true); // Must be set to true
  const cart = useAppSelector((state: RootState) => state.cart);
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS;

  const total = (cart.total / 100).toFixed(2);

  const getClientSecret = async () => {
    const apiName: string = "stripepaymentapi";
    const path: string = "/create-payment-intent";
    const init = {
      headers: {"Content-Type": "application/json"},
      body: {orderID: cart.orderID, items: cart.items, email: user.email},
    };

    try {
      const response: any = await API.post(apiName, path, init);
      const clientSecret = response.clientSecret;
      return clientSecret;
    } catch (error) {
      console.log(error);
    }
  };

  const addOrderToDatabase = async () => {
    console.log("Adding Order to Database...");
    try {
      const createOrderResult: GraphQLResult<any> = await API.graphql({
        query: createOrder,
        variables: {
          input: {
            id: cart.orderID,
            customerID: user.email,
            email: user.email,
            totalItems: cart.totalItems,
            subtotal: cart.subtotal,
            tax: cart.tax,
            total: cart.total,
          },
        },
        authMode,
      });

      for (const cartItem of cart.items) {
        const createOrderItemResult: GraphQLResult<any> = await API.graphql({
          query: createOrderItem,
          variables: {
            input: {
              id: uuidv7(),
              orderID: cart.orderID,
              menuItemID: cartItem.menuItemID,
              title: cartItem.title,
              image: cartItem.image,
              description: cartItem.description,
              price: cartItem.price,
              quantity: cartItem.quantity,
            },
          },
          authMode,
        });
      }
      return "succeeded";
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const placeOrderSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPlaceOrderBtnDisabled(true);
    props.setIsProcessing(true);
    console.log("Place Order Submit");

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    try {
      // Get clientSK
      const clientSecret = await getClientSecret();

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement("card") as StripeCardElement,
          billing_details: {
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
          },
        },
      });

      const paymentStatus = paymentResult.paymentIntent?.status;
      console.log("Confirm Payment Status:", paymentStatus);

      if (paymentStatus === "succeeded") {
        const dbStatus = await addOrderToDatabase();
        console.log("Added to DB Status:", dbStatus);
        if (dbStatus === "succeeded") {
          props.setisOrderSucceeded(true);
        }
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.

        console.log(
          "Processing Payment of: $",
          paymentResult.paymentIntent?.amount
        );
        // Empty cart
        dispatch(emptyCart(null));
      }
    } catch (error) {
      // Show error to your customer (for example, insufficient funds)
      setIsPlaceOrderBtnDisabled(false);
      props.setisOrderSucceeded(false);
      props.setIsProcessing(false);
      console.log(error);
    }
  };

  const cardElementChangeHandler = (event: StripeCardElementChangeEvent) => {
    setIsPlaceOrderBtnDisabled(!event.complete);
  };

  const CARD_ELEMENT_OPTIONS: StripeCardElementOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <form className={styles["payment-form"]} onSubmit={placeOrderSubmitHandler}>
      <CardElement
        className={styles["card-element"]}
        options={CARD_ELEMENT_OPTIONS}
        onChange={cardElementChangeHandler}
      />
      {props.isProcessing ? (
        <Fragment>
          <div className={styles["processing-text"]}>
            Please wait.
            <br />
            Processing payment . . .
          </div>
          <LoaderIcon />
        </Fragment>
      ) : (
        <button
          className={styles.button}
          type="submit"
          disabled={isPlaceOrderBtnDisabled}
        >
          Place My Order
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
