import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {CartItemType, CartStateType, MenuItemType} from "../../mylib/MyTypes";

// const initialItemState: CartItem = {
//   menuItemID: "",
//   cartItemID: 0,
//   image: "",
//   title: "",
//   price: 0,
//   description: "",
//   quantity: 0,
// };

const initialCartState: CartStateType = {
  orderID: 0,
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
        price: itemToAdd.price,
        quantity,
        itemID: 0,
        totalPrice: 0,
      };

      state.totalItems += newItem.quantity;
      newItem.totalPrice = newItem.price * newItem.quantity;
      state.subtotal += newItem.totalPrice;
      state.tax = state.subtotal * taxRate;
      state.total = state.subtotal + state.tax;
      state.items.push(newItem);
      state.items.forEach((item, i) => {
        item.itemID = 1001 + i;
      });
    },
    removeCartItem: (state, action: PayloadAction<{itemID: number}>) => {
      const itemIdToMatch = action.payload.itemID;
      const indexOfItemToRemove = state.items.findIndex(
        (item) => item.itemID === itemIdToMatch
      );
      const itemToRemove = state.items[indexOfItemToRemove];
      state.totalItems -= itemToRemove.quantity;
      state.subtotal -= itemToRemove.totalPrice;
      state.tax = state.subtotal * taxRate;
      state.total = state.subtotal + state.tax;
      const filteredItems = state.items.filter(
        (item) => item.itemID !== itemIdToMatch
      );
      state.items = filteredItems;
    },
    updateCartItem: (
      state,
      action: PayloadAction<{itemID: number; quantity: number}>
    ) => {
      console.log(action);

      const itemIdToMatch = action.payload.itemID;
      const newQuantity = action.payload.quantity;
      const indexOfItemToUpdate = state.items.findIndex(
        (item) => item.itemID === itemIdToMatch
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
      state.tax = state.subtotal * taxRate;
      state.total = state.subtotal + state.tax;
    },
    emptyCart: (state) => {
      state = initialCartState;
    },
  },
});

//export const selectTotalItems = (state: RootState) => state.cart.totalItems;
export const {addItemToCart, removeCartItem, updateCartItem, emptyCart} =
  cartSlice.actions;
export default cartSlice.reducer;
