import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {UserType} from "../../mylib/MyTypes";

// const address: Partial<Address> = {
//   street: null,
//   apt: null,
//   city: null,
//   state: null,
//   zipCode: null,
// };

const initialUserState: Partial<UserType> = {
  firstName: "",
};

const userSlice: Slice<Partial<UserType>> = createSlice({
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

export const {setUserInfo} = userSlice.actions;
export default userSlice.reducer;
