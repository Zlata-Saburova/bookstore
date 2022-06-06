import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetailsApi } from "../../services/types";
import { IBookCartItem, ICartStore } from "../types";

const initialState: ICartStore = {
  cartItems: [],
  total: 0,
  isLoading: true,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBookToCart: (state, { payload }: PayloadAction<IBookCartItem>) => {
      state.cartItems = [
        { ...payload },
        ...state.cartItems.filter((book) => book.isbn13 !== payload.isbn13),
      ];
    },
    removeBook: (state, { payload }: PayloadAction<IBookDetailsApi>) => {
      state.cartItems = state.cartItems.filter(
        (book) => book.isbn13 !== payload.isbn13
      );
    },
    increaseAmount: (state, { payload }: PayloadAction<IBookCartItem>) => {
      const cartItem = state.cartItems.find(
        (book) => book.isbn13 === payload.isbn13
      );

      if (cartItem) {
        cartItem.amount = cartItem.amount + 1;
      }
    },
    decreaseAmount: (state, { payload }: PayloadAction<IBookCartItem>) => {
      const cartItem = state.cartItems.find(
        (book) => book.isbn13 === payload.isbn13
      );

      if (cartItem) {
        cartItem.amount = cartItem.amount - 1;
      }
    },
  },
});

export const { addBookToCart, removeBook, increaseAmount, decreaseAmount } =
  cartReducer.actions;

export default cartReducer.reducer;
