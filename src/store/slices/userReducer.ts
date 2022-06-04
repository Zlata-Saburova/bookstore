import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetailsApi } from "../../services/types";
import { IUserStore } from "../types";

const initialState: IUserStore = {
  isAuth: false,
  email: undefined,
  name: undefined,
  favorites: [],
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.email = action.payload;
    },
    setUserName: (state, action) => {
      state.name = action.payload;
    },
    unsetUser: (state) => {
      state.isAuth = false;
      state.email = undefined;
    },
    addFavorite: (state, { payload }: PayloadAction<IBookDetailsApi>) => {
      state.favorites.push(payload);
    },
    deleteFavorite: (state, { payload }: PayloadAction<IBookDetailsApi>) => {
      state.favorites = state.favorites.filter(
        (book) => book.isbn13 !== payload.isbn13
      );
    },
    addBookToCart: (state, { payload }: PayloadAction<IBookDetailsApi>) => {
      state.cart.push(payload);
    },
  },
});

export const {
  setUser,
  unsetUser,
  setUserName,
  addFavorite,
  deleteFavorite,
  addBookToCart,
} = userSlice.actions;
export default userSlice.reducer;
