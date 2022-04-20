import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import mainReducer from "./slices/mainSlice";
import menuReducer from "./slices/menuSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    main: mainReducer,
    menu: menuReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
