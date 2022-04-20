import {Fragment, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../appStore/hooks";
import {setCartOrderID} from "../../../appStore/slices/cartSlice";
import {RootState} from "../../../appStore/store";
import Checkout from "../checkout/Checkout";
import CartContent from "./CartContent";

const Cart = () => {
  const [isCheckoutDisplayed, setIsCheckoutDisplayed] =
    useState<boolean>(false);
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const backButtonClickHandler = () => {
    window.scrollTo({top: 0, left: 0, behavior: "auto"});
    setIsCheckoutDisplayed(false);
  };

  const checkOutClickHandler = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    const regex = /\D/g;

    const formattedDate = date
      .toLocaleString("en-US", options)
      .replace(regex, "");

    dispatch(setCartOrderID({orderID: formattedDate}));
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
