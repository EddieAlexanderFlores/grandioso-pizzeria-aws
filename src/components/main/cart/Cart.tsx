import {Fragment, useState} from "react";
import {useAppDispatch} from "../../../appStore/hooks";
import {setCartOrderID} from "../../../appStore/slices/cartSlice";
import {CartSelectionType} from "../../../mylib/MyTypes";
import Checkout from "../checkout/Checkout";
import CartContent from "./CartContent";
import styles from "./Cart.module.css";
import {uuidv7} from "uuidv7";

const Cart = () => {
  const [selection, setSelection] = useState<CartSelectionType>("cart");
  const dispatch = useAppDispatch();

  window.scrollTo({top: 0, left: 0, behavior: "auto"});

  const backButtonClickHandler = () => {
    setSelection("cart");
  };

  const checkOutClickHandler = () => {
    setSelection("checkout");
    dispatch(setCartOrderID({orderID: uuidv7()}));
  };

  let content: JSX.Element = (
    <CartContent onCheckOutClick={checkOutClickHandler} />
  );

  switch (selection) {
    case "cart":
      content = <CartContent onCheckOutClick={checkOutClickHandler} />;
      break;
    case "checkout":
      content = <Checkout onBackButtonClick={backButtonClickHandler} />;
      break;
    default:
      content = <CartContent onCheckOutClick={checkOutClickHandler} />;
      break;
  }

  return (
    <Fragment>
      <h2 className={styles.header}>{selection}</h2>
      {content}
    </Fragment>
  );
};

export default Cart;
