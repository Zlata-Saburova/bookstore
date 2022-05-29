import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/booksSlice";
import userReducer from "./slices/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
