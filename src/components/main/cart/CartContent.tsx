import {Fragment, MouseEventHandler, useState} from "react";
import {useAppSelector} from "../../../appStore/hooks";
import {RootState} from "../../../appStore/store";
import styles from "./CartContent.module.css";
import CartItem from "./CartItem";

type Props = {
  onCheckOutClick: MouseEventHandler<HTMLButtonElement>;
};

const CartContent = (props: Props) => {
  const [isCheckOutBtnDisabled, setIsCheckOutBtnDisabled] = useState(false);
  const cart = useAppSelector((state: RootState) => state.cart);
  const user = useAppSelector((state: RootState) => state.user);

  const subtotal = (cart.subtotal / 100).toFixed(2);
  const tax = (cart.tax / 100).toFixed(2);
  const total = (cart.total / 100).toFixed(2);

  console.log("# of Cart Orders", cart.items.length);
  console.log(
    "Orders:",
    cart.items.map((item) => item.itemID)
  );

  return (
    <Fragment>
      <h2 className={styles.header}>My Cart</h2>
      {!user.firstName && (
        <p className={styles.message}>PLEASE SIGN IN TO CHECK OUT.</p>
      )}
      {cart.items.length === 0 ? (
        <p className={styles.message}>
          Your cart is empty, add items from the menu to continue.
        </p>
      ) : (
        <ul className={styles["cart-list"]}>
          {cart.items.map((item) => (
            <CartItem key={item.itemID} item={item} />
          ))}
        </ul>
      )}
      <div className={styles["cart-summary"]}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.subtotal}>
              <td className={styles["subtotal-title"]}>Subtotal:</td>
              <td className={styles["subtotal-amount"]}>${subtotal}</td>
            </tr>
            <tr className={styles.tax}>
              <td className={styles["tax-title"]}>Estimated Tax:</td>
              <td className={styles["tax-amount"]}>${tax}</td>
            </tr>
            <tr className={styles.total}>
              <td className={styles["total-title"]}>Total:</td>
              <td className={styles["total-amount"]}>${total}</td>
            </tr>
          </tbody>
        </table>
        <button
          className={styles.button}
          disabled={isCheckOutBtnDisabled}
          onClick={props.onCheckOutClick}
        >
          Check Out
        </button>
      </div>
    </Fragment>
  );
};

export default CartContent;
