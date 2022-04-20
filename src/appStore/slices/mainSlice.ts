import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {MainContentType} from "../../mylib/MyTypes";

export const initialMainNavState: MainContentType = {selection: "menu"};

const mainSlice: Slice<MainContentType> = createSlice({
  name: "main",
  initialState: initialMainNavState,
  reducers: {
    setMainContent: (state, action: PayloadAction<MainContentType>) => {
      state.selection = action.payload.selection;
    },
  },
});

export const {setMainContent} = mainSlice.actions;
export default mainSlice.reducer;
