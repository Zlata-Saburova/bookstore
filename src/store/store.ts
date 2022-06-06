import { configureStore, createReducer } from "@reduxjs/toolkit";
import booksReducer from "./slices/booksSlice";
import cartReducer from "./slices/cartReducer";
import userReducer from "./slices/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
