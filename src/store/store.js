import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from './authSlice'
import singleItemReducer from "./singleItemSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    singleItem: singleItemReducer,
  },
});
