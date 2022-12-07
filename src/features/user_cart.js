import { createSlice } from "@reduxjs/toolkit";

function getValue() {
  const initialStateValue = [];
  const my_object = localStorage.getItem("products")
  console.log("my_object:", my_object)
  if (typeof my_object !== 'undefined' && my_object !== null) {
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
  }
  return initialStateValue;
}

const initialStateValue = getValue();

console.log(initialStateValue)

export const redux_productSlice = createSlice({
  name: "redux_user_cart",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    addToCart: (state = initialStateValue, action) => {
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