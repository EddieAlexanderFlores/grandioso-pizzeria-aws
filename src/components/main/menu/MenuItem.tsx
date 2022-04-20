import styles from "./MenuItem.module.css";
import OrderForm from "./OrderForm";
import {MenuItemType} from "../../../mylib/MyTypes";
import {useAppDispatch} from "../../../appStore/hooks";
import {addItemToCart} from "../../../appStore/slices/cartSlice";

type Props = {
  item: MenuItemType;
};

const MenuItem = (props: Props) => {
  const dispatch = useAppDispatch();

  const price = (props.item.price / 100).toFixed(2);

  const addToOrderHandler = (quantity: number) => {
    console.log(props.item.title + ": " + quantity + " orders");
    const item = props.item;
    dispatch(addItemToCart({item, quantity}));
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
      <div className={styles["form-container"]}>
        <OrderForm className={styles.form} onAddToOrder={addToOrderHandler} />
      </div>
    </li>
  );
};

export default MenuItem;
