import { createSlice } from "@reduxjs/toolkit";

var initialStateValue = JSON.parse(localStorage.getItem("products"));

export const redux_productSlice = createSlice({
  name: "redux_product",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    editProduct: (state, action) => {
      const itemIndex = state.value.findIndex((item) => item.keyName === action.payload.keyName)
      state.value[itemIndex] = {
        ...state.value[itemIndex],
        img: action.payload.img,
        item_title: action.payload.title,
        price: action.payload.price,
        quantity: action.payload.quantity
      }
    }

  }
});

export const { update, editProduct } = redux_productSlice.actions;

export default redux_productSlice.reducer;