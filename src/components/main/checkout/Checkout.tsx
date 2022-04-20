import {GraphQLResult, GRAPHQL_AUTH_MODE} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";
import {FormEvent, Fragment, MouseEventHandler, useState} from "react";
import {useAppSelector} from "../../../appStore/hooks";
import {RootState} from "../../../appStore/store";
import {createOrder, createOrderItem} from "../../../graphql/mutations";
import styles from "./Checkout.module.css";

type Props = {
  onBackButtonClick: MouseEventHandler<HTMLButtonElement>;
};

const Checkout = (props: Props) => {
  const cart = useAppSelector((state: RootState) => state.cart);
  const user = useAppSelector((state: RootState) => state.user);
  const [isOrderSucceeded, setisOrderSucceeded] = useState<boolean>(false);
  const [isPlaceOrderBtnDisabled, setIsPlaceOrderBtnDisabled] =
    useState<boolean>(false); // Change to true
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS;

  const total = (cart.total / 100).toFixed(2);

  console.log(
    "Cart Items:",
    cart.items.map((item) => item)
  );

  const addOrderToDatabase = async () => {
    console.log("Adding Order to Database...");
    try {
      const createOrderResult: GraphQLResult<any> = await API.graphql({
        query: createOrder,
        variables: {
          input: {
            id: cart.orderID,
            totalItems: cart.totalItems,
            subtotal: cart.subtotal,
            tax: cart.tax,
            total: cart.total,
            customerOrdersId: user.email,
          },
        },
        authMode,
      });

      for (const item of cart.items) {
        const createOrderItemResult: GraphQLResult<any> = await API.graphql({
          query: createOrderItem,
          variables: {
            input: {
              id: item.id,
              title: item.title,
              description: item.description,
              image: item.image,
              price: item.price,
              quantity: item.quantity,
              totalPrice: item.totalPrice,
              orderItemsId: cart.orderID,
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
    setIsProcessing(true);
    try {
      const dbStatus = await addOrderToDatabase();
      console.log("Added to DB Status:", dbStatus);
      if (dbStatus === "succeeded") {
        setisOrderSucceeded(true);
      }
      console.log("Processing Payment of: $", total);
    } catch (error) {
      setIsPlaceOrderBtnDisabled(false);
      setisOrderSucceeded(false);
      setIsProcessing(false);
      console.log(error);
    }
  };

  return (
    <Fragment>
      <h2 className={styles.header}>Checkout</h2>
      <button
        className={styles["back-button"]}
        disabled={isProcessing}
        onClick={props.onBackButtonClick}
      >{`< Cart`}</button>
      {isOrderSucceeded ? (
        <p className={styles.message}>
          Thank you for choosing Grandioso, your order has been placed.
        </p>
      ) : (
        <div className={styles.payment}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.total}>
                <td className={styles["total-title"]}>Total:</td>
                <td className={styles["total-amount"]}>${total}</td>
              </tr>
            </tbody>
          </table>
          <h3 className={styles["payment-title"]}>Payment Method:</h3>
          <form
            className={styles["payment-form"]}
            onSubmit={placeOrderSubmitHandler}
          >
            {/* <CardElement
              className={styles["card-element"]}
              options={CARD_ELEMENT_OPTIONS}
              onChange={cardElementChangeHandler}
            /> */}
            <button
              className={styles.button}
              type="submit"
              disabled={isPlaceOrderBtnDisabled}
            >
              {isProcessing ? (
                <div className={styles["processing-text"]}>
                  Processing . . .
                </div>
              ) : (
                "Place My Order"
              )}
            </button>
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default Checkout;
