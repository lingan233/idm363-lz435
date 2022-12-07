import { createSlice } from "@reduxjs/toolkit";

// async function getValue() {
//   await JSON.parse(localStorage.getItem("products"));
//   const initialStateValue = [
//     ...JSON.parse(localStorage.getItem("products"))].map((product) => ({
//     ...product,
//     in_cart: 0,
//   }));
//   return initialStateValue;
// }

// const initialStateValue = getValue();

// console.log(localStorage.getItem("products"))

const initialStateValue = [
  ...JSON.parse(localStorage.getItem("products")).map((product) => ({
  ...product,
  in_cart: 0,
}))];

// console.log(initialStateValue)

export const redux_productSlice = createSlice({
  name: "redux_user_cart",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.value.find((item) => item.keyName === action.payload.keyName)
      if (itemInCart) {
        itemInCart.in_cart++;
      } else {
        console.log("no itemInCart")
      }
    },
    removeFromCart: (state, action) => {
      const itemInCart = state.value.find((item) => item.keyName === action.payload.keyName)
      if (itemInCart) {
        itemInCart.in_cart--;
      } else {
        console.log("no itemInCart")
      }
    },
  },
});

export const { addToCart, removeFromCart } = redux_productSlice.actions;

export default redux_productSlice.reducer;