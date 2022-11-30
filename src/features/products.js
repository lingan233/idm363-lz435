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
    // update_product: (state, action) => {
    //   const productIndex = state.value.findIndex((product) => product.id === action.payload.id)
    //   state.value[productIndex] = {
    //     ...state.value[productIndex],
    //     name: action.payload.name,
    //     price: action.payload.price
    //   }
    // },
  }
});

export const { update, update_product } = redux_productSlice.actions;

export default redux_productSlice.reducer;