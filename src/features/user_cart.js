import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    //   redux_productname: "jane_smith",
//   email: "jane@example.com",
};

export const redux_productSlice = createSlice({
  name: "redux_user_cart",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    updateCartNum: (state, action) => {
      state.value.in_cart = action.payload.in_cart;
    //   console.log("state:", state.value);
    //   console.log(action.payload);
    },
    update: (state, action) => {
        state.value = action.payload;
      //   console.log("state:", state.value);
      //   console.log(action.payload);
      },
  },
});

export const { update, updateCartNum } = redux_productSlice.actions;

export default redux_productSlice.reducer;