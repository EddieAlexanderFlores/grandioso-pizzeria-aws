import {OrderItem} from "../../../mylib/MyTypes";
import styles from "./OrdersListItems.module.css";

type Props = {
  orderItem: OrderItem;
};

const OrdersListItems = (props: Props) => {
  return (
    <li className={styles.li}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles["item-name"]}>{props.orderItem.title}</td>
            <td className={styles["qty-name"]}>{"Qty:"}</td>
            <td className={styles["qty-number"]}>{props.orderItem.quantity}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

export default OrdersListItems;
