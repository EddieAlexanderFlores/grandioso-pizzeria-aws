import {Storage} from "aws-amplify";
import {
  Fragment,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import {useAppDispatch, useAppSelector} from "../../../appStore/hooks";
import {setCartItemImageURL} from "../../../appStore/slices/cartSlice";
import {RootState} from "../../../appStore/store";
import LoaderIcon from "../../ui/icons/LoaderIcon";
import styles from "./CartContent.module.css";
import CartItem from "./CartItem";

type Props = {
  onCheckOutClick: MouseEventHandler<HTMLButtonElement>;
};

const CartContent = (props: Props) => {
  const [isCheckOutBtnDisabled, setIsCheckOutBtnDisabled] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const cart = useAppSelector((state: RootState) => state.cart);
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const subtotal = (cart.subtotal / 100).toFixed(2);
  const tax = (cart.tax / 100).toFixed(2);
  const total = (cart.total / 100).toFixed(2);

  const setImageURL = async () => {
    try {
      setIsLoading(true);
      for (const item of cart.items) {
        const imageURL: string = await Storage.get(item.image, {
          level: "public",
        });
        dispatch(setCartItemImageURL({id: item.cartItemId, imageURL}));
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setImageURL();
  }, []);

  return isLoading ? (
    <div className={styles.loader}>
      <LoaderIcon />
    </div>
  ) : (
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
            <CartItem key={item.cartItemId} item={item} />
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
