import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice.js";
import productReducer from "./features/productSlice.js";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
  },
});

export default store;
