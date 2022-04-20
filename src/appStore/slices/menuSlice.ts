import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {MenuContentType} from "../../mylib/MyTypes";

export const initialMenuNavState: MenuContentType = {selection: "pizza"};

const menuSlice: Slice<MenuContentType> = createSlice({
  name: "menu",
  initialState: initialMenuNavState,
  reducers: {
    setMenuContent: (state, action: PayloadAction<MenuContentType>) => {
      state.selection = action.payload.selection;
    },
  },
});

export const {setMenuContent} = menuSlice.actions;
export default menuSlice.reducer;
