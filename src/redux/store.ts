import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";
import apiReducer from "./slices/apiSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    api: apiReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
