import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, IUserStore } from "../types";

const initialState: IUserStore = {
  isAuth: false,
  email: undefined,
  name: undefined,
  favorites: [],
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
    addFavorite: (state, { payload }: PayloadAction<IBook>) => {
      state.favorites.push(payload);
    },
  },
});

export const { setUser, unsetUser, setUserName, addFavorite } =
  userSlice.actions;
export default userSlice.reducer;
