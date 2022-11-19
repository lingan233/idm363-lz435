import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
//   redux_productname: "jane_smith",
//   email: "jane@example.com",
//   item_title: [],
//   price: [],
//   keyName: [],
//   quantity: []
};

export const redux_productSlice = createSlice({
  name: "redux_product",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { update } = redux_productSlice.actions;

export default redux_productSlice.reducer;