import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {CartItemType, CartStateType, MenuItemType} from "../../mylib/MyTypes";

const initialCartState: CartStateType = {
  orderID: "",
  items: [],
  totalItems: 0,
  subtotal: 0,
  tax: 0,
  total: 0,
};

const taxRate = 0.08875;

const cartSlice: Slice<CartStateType> = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<{item: MenuItemType; quantity: number}>
    ) => {
      const itemToAdd = action.payload.item;
      const quantity = action.payload.quantity;

      const newItem: CartItemType = {
        title: itemToAdd.title,
        description: itemToAdd.description,
        image: itemToAdd.image,
        imageURL: itemToAdd.imageURL,
        price: itemToAdd.price,
        menuItemID: itemToAdd.menuItemID,
        quantity,
        cartItemID: 0,
        totalPrice: 0,
      };

      state.totalItems += newItem.quantity;
      newItem.totalPrice = newItem.price * newItem.quantity;
      state.subtotal += newItem.totalPrice;
      state.tax = Math.round(state.subtotal * taxRate);
      state.total = state.subtotal + state.tax;
      state.items.push(newItem);
      state.items.forEach((item, i) => {
        item.cartItemID = 1001 + i;
      });
    },
    removeCartItem: (state, action: PayloadAction<{id: number}>) => {
      const idToMatch = action.payload.id;
      const indexOfItemToRemove = state.items.findIndex(
        (item) => item.cartItemID === idToMatch
      );
      const itemToRemove = state.items[indexOfItemToRemove];
      state.totalItems -= itemToRemove.quantity;
      state.subtotal -= itemToRemove.totalPrice;
      state.tax = Math.round(state.subtotal * taxRate);
      state.total = state.subtotal + state.tax;
      const filteredItems = state.items.filter(
        (item) => item.cartItemID !== idToMatch
      );
      state.items = filteredItems;
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{id: number; quantity: number}>
    ) => {
      const idToMatch = action.payload.id;
      const newQuantity = action.payload.quantity;
      const indexOfItemToUpdate = state.items.findIndex(
        (item) => item.cartItemID === idToMatch
      );
      const itemUpdates = state.items[indexOfItemToUpdate];
      itemUpdates.quantity = newQuantity;
      itemUpdates.totalPrice = itemUpdates.price * newQuantity;
      state.items[indexOfItemToUpdate] = itemUpdates;
      state.totalItems = state.items.reduce(
        (prevQuantity, currItem) => prevQuantity + currItem.quantity,
        0
      );
      state.subtotal = state.items.reduce(
        (prevTotalPrice, currItem) => prevTotalPrice + currItem.totalPrice,
        0
      );
      state.tax = Math.round(state.subtotal * taxRate);
      state.total = state.subtotal + state.tax;
    },
    setCartItemImageURL: (
      state,
      action: PayloadAction<{id: number; imageURL: string}>
    ) => {
      const idToMatch = action.payload.id;
      const newImageURL = action.payload.imageURL;
      const indexOfItemToUpdate = state.items.findIndex(
        (item) => item.cartItemID === idToMatch
      );
      state.items[indexOfItemToUpdate].imageURL = newImageURL;
    },
    setCartOrderID: (state, action: PayloadAction<{orderID: string}>) => {
      state.orderID = action.payload.orderID;
    },
    emptyCart: (state) => {
      state.items = initialCartState.items;
      state.orderID = initialCartState.orderID;
      state.subtotal = initialCartState.subtotal;
      state.tax = initialCartState.tax;
      state.total = initialCartState.total;
      state.totalItems = initialCartState.totalItems;
    },
  },
});

export const {
  addItemToCart,
  removeCartItem,
  updateCartItemQuantity,
  setCartItemImageURL,
  setCartOrderID,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
