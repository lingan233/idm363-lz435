import { configureStore } from "@reduxjs/toolkit";
import redux_productReducer from "./features/products";
import redux_user_cartReducer from "./features/user_cart";

export default configureStore({
  reducer: {
    redux_product: redux_productReducer,
    redux_user_cart: redux_user_cartReducer,
  },
});