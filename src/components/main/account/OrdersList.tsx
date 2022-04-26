import {Order, OrderItem} from "../../../mylib/MyTypes";
import OrdersListItems from "./OrdersListItems";
import styles from "./OrdersList.module.css";

type Props = {
  order: Order;
};

const OrdersList = (props: Props) => {
  const orderItems: OrderItem[] = props.order.orderItems.items;

  const date = new Date(props.order.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <li className={styles.li}>
      <h3 className={styles.heading}>{date}</h3>
      <div className={styles.section}>
        <div>
          <span className={styles.title}>{"Order #"}</span>
          <span>{props.order.id}</span>
        </div>
        <div>
          <span className={styles.title}>{"Total Items: "}</span>
          <span>{props.order.totalItems}</span>
        </div>
        <div>
          <span className={styles.title}>{"Order Total: $"}</span>
          <span>{(props.order.total / 100).toFixed(2)}</span>
        </div>
      </div>

      <h3 className={styles.heading}>Items:</h3>
      <ul className={styles.ul}>
        {orderItems.map((orderItem) => (
          <OrdersListItems key={orderItem.id} orderItem={orderItem} />
        ))}
      </ul>
    </li>
  );
};

export default OrdersList;
