import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {AddressType, UserType} from "../../mylib/MyTypes";

export const initialAddressState: AddressType = {
  street: "",
  apt: "",
  city: "",
  state: "",
  zipCode: "",
};

export const initialUserState: UserType = {
  firstName: "",
  lastName: "",
  email: "",
  telephone: "+1",
  password: "",
  address: initialAddressState,
};

const userSlice: Slice<UserType> = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserType>) => {
      const authUser = action.payload;
      state.firstName = authUser.firstName;
      state.lastName = authUser.lastName;
      state.email = authUser.email;
      state.telephone = authUser.telephone;
      state.address = authUser.address;
    },
  },
});

export const {resetUserInfo, setUserInfo} = userSlice.actions;
export default userSlice.reducer;
