import {Fragment, useState} from "react";
import Checkout from "../checkout/Checkout";
import CartContent from "./CartContent";

const Cart = () => {
  const [isCheckoutDisplayed, setIsCheckoutDisplayed] = useState(false);

  const backButtonClickHandler = () => {
    window.scrollTo({top: 0, left: 0, behavior: "auto"});
    setIsCheckoutDisplayed(false);
  };

  const checkOutClickHandler = () => {
    window.scrollTo({top: 0, left: 0, behavior: "auto"});
    setIsCheckoutDisplayed(true);
  };

  return (
    <Fragment>
      {isCheckoutDisplayed ? (
        <Checkout onBackButtonClick={backButtonClickHandler} />
      ) : (
        <CartContent onCheckOutClick={checkOutClickHandler} />
      )}
    </Fragment>
  );
};

export default Cart;
