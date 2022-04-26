import {GraphQLResult, GRAPHQL_AUTH_MODE} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";
import {Fragment, MouseEventHandler, useEffect, useState} from "react";
import {useAppSelector} from "../../../appStore/hooks";
import {RootState} from "../../../appStore/store";
import {getCustomer} from "../../../mygraphql/queries";
import {Order} from "../../../mylib/MyTypes";
import LoaderIcon from "../../ui/icons/LoaderIcon";
import styles from "./Orders.module.css";
import OrdersList from "./OrdersList";

type Props = {
  onBackButtonClick: MouseEventHandler<HTMLButtonElement>;
};

const Orders = (props: Props) => {
  const user = useAppSelector((state: RootState) => state.user);
  const [orders, setOrders] = useState<Array<Order>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        const apiData: GraphQLResult<any> = await API.graphql({
          query: getCustomer,
          variables: {id: user.email, sortDirection: "DESC", limit: 10},
          authMode,
        });
        setOrders(apiData.data.getCustomer.orders.items as Order[]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Fragment>
      <button
        className={styles["back-button"]}
        onClick={props.onBackButtonClick}
      >{`< Account`}</button>
      {isLoading ? (
        <LoaderIcon />
      ) : orders.length === 0 ? (
        <p className={styles.message}>You have no order history.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <OrdersList key={order.id} order={order} />
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default Orders;
