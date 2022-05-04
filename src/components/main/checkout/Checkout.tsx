import {Fragment, MouseEventHandler, useState} from "react";
import {useAppSelector} from "../../../appStore/hooks";
import {RootState} from "../../../appStore/store";
import styles from "./Checkout.module.css";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  `pk_test_51KVeruLxYyRcxFi2PMXiYrErTlKEOk20GhjqbQFrH3l8nuv3vFHHx1gzHzK7EfWRsKvSajFt7GJRsfrL0uDtiY4q00n95sIqVx`
);

type Props = {
  onBackButtonClick: MouseEventHandler<HTMLButtonElement>;
};

const Checkout = (props: Props) => {
  const cart = useAppSelector((state: RootState) => state.cart);
  const [isOrderSucceeded, setisOrderSucceeded] = useState<boolean>(false); // Set to false
  const [isProcessing, setIsProcessing] = useState<boolean>(false); // Set to false

  const total = (cart.total / 100).toFixed(2);

  return (
    <Fragment>
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
          <Elements stripe={stripePromise}>
            <CheckoutForm
              setIsProcessing={setIsProcessing}
              isProcessing={isProcessing}
              setisOrderSucceeded={setisOrderSucceeded}
            />
          </Elements>
        </div>
      )}
    </Fragment>
  );
};

export default Checkout;
