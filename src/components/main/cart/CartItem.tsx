import {useAppDispatch} from "../../../appStore/hooks";
import {
  removeCartItem,
  updateCartItemQuantity,
} from "../../../appStore/slices/cartSlice";
import {CartItemType} from "../../../mylib/MyTypes";
import styles from "./CartItem.module.css";
import UpdateForm from "./UpdateForm";

type Props = {
  item: CartItemType;
};

const CartItem = (props: Props) => {
  const dispatch = useAppDispatch();

  const price = (props.item.price / 100).toFixed(2);
  const totalPrice = (props.item.totalPrice / 100).toFixed(2);

  const removeItemHandler = () => {
    dispatch(removeCartItem({id: props.item.cartItemID}));
  };

  const updateItemQuantity = (quantity: number) => {
    dispatch(updateCartItemQuantity({id: props.item.cartItemID, quantity}));
  };

  return (
    <li className={styles.item}>
      <div className={styles["item-container"]}>
        <div className={styles["img-container"]}>
          <img
            className={styles.image}
            src={props.item.imageURL}
            alt={props.item.title}
          />
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>{props.item.title}</h3>
          <div className={styles.price}>${price}</div>
          <div className={styles.description}>{props.item.description}</div>
        </div>
      </div>
      <div className={styles["total-summary"]}>
        <div className={styles.total}>${totalPrice}</div>
        <UpdateForm
          className={styles.form}
          quantity={props.item.quantity}
          onRemoveItem={removeItemHandler}
          onUpdateItemQuantity={updateItemQuantity}
        />
      </div>
    </li>
  );
};

export default CartItem;
