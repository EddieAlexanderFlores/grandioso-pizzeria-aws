import {MouseEventHandler} from "react";
import {useAppSelector} from "../../appStore/hooks";
import {RootState} from "../../appStore/store";
import CartIcon from "../ui/icons/CartIcon";
import styles from "./CartButton.module.css";

type Props = {
  className: string;
  name: string;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const CartButton = (props: Props) => {
  const totalCartItems = useAppSelector(
    (state: RootState) => state.cart.totalItems
  );

  return (
    <button
      className={props.className}
      name={props.name}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <div className={styles.cart}>
        <CartIcon />
        <span className={styles.badge}>{totalCartItems}</span>
      </div>
    </button>
  );
};

export default CartButton;
