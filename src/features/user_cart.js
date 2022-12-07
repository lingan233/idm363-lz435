import { createSlice } from "@reduxjs/toolkit";

function getValue() {
  const initialStateValue = [];
  if (typeof my_object !== null) {
    // console.log('my_object is null')
    console.log('my_object not null:', localStorage.getItem("products"))
    console.log('my_object not null: json.parse', JSON.parse(localStorage.getItem("products")) )
    const initialStateValue = [
      ...JSON.parse(localStorage.getItem("products")).map((product) => ({
      ...product,
      in_cart: 0,
    }))];
    return initialStateValue;
  } else {
    console.log('my_object is null')
    // console.log('my_object not null')
    // const initialStateValue = [
    //   ...JSON.parse(localStorage.getItem("products")).map((product) => ({
    //   ...product,
    //   in_cart: 0,
    // }))];
  }
  return initialStateValue;
}

// const initialStateValue = getValue();

// console.log(localStorage.getItem("products"))

// const my_object = localStorage.getItem("products")
// // console.log(typeof localStorage.getItem("products"))


// if (typeof my_object === null) {
//   console.log('my_object is null')
// } else {
//   console.log('my_object not null')
//   const initialStateValue = [
//     ...JSON.parse(localStorage.getItem("products")).map((product) => ({
//     ...product,
//     in_cart: 0,
//   }))];
//   return initialStateValue;
// }
const initialStateValue = getValue();

console.log(initialStateValue)

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