import { configureStore } from "@reduxjs/toolkit";
import redux_productReducer from "./features/products";

export default configureStore({
  reducer: {
    redux_product: redux_productReducer,
  },
});