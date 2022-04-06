import {FormEvent, Fragment, MouseEventHandler, useState} from "react";
import {useAppSelector} from "../../../appStore/hooks";
import {RootState} from "../../../appStore/store";
import styles from "./Checkout.module.css";

type Props = {
  onBackButtonClick: MouseEventHandler<HTMLButtonElement>;
};

const Checkout = (props: Props) => {
  const cart = useAppSelector((state: RootState) => state.cart);
  const [isOrderSucceeded, setisOrderSucceeded] = useState(false);
  const [isPlaceOrderBtnDisabled, setIsPlaceOrderBtnDisabled] = useState(false); // Change to true
  const [isProcessing, setIsProcessing] = useState(false);

  const total = (cart.total / 100).toFixed(2);

  const placeOrderSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Processing Payment of: $", total);
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
