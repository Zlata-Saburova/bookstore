import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookApi } from "../../services/bookService";
import { IBookDetailsApi, INewBooksApi } from "../../services/types";
import { IBookApi, IArguments } from "../types";

const initialState: IBookApi = {
  books: [],
  error: null,
  status: "idle",
  total: "0",
  result: {
    authors: "",
    desc: "",
    error: "",
    image: "",
    isbn10: "",
    isbn13: "",
    language: "",
    pages: "",
    pdf: {},
    price: "",
    publisher: "",
    rating: "",
    subtitle: "",
    title: "",
    url: "",
    year: "",
  },
};

export const fetchBooks = createAsyncThunk<INewBooksApi>(
  "books/fetchBooks",
  async () => {
    const newBooks = await bookApi.getNewBooks();
    return newBooks;
  }
);

export const fetchBookDetails = createAsyncThunk<IBookDetailsApi, string>(
  "books/fetchBookDetails",
  async (id) => {
    const bookDetails = await bookApi.getBookDetails(id);
    return bookDetails;
  }
);

export const fetchBooksBySearch = createAsyncThunk<any, IArguments>(
  "books/fetchBooksBySearch",
  async ({ title, page }) => {
    const rezultBooks = await bookApi.getBooksBySearch(title, page);
    return rezultBooks;
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload.books;
      state.status = "success";
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.error;
      state.status = "error";
    });
    builder.addCase(fetchBooksBySearch.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchBooksBySearch.fulfilled, (state, action) => {
      state.books = action.payload.books;
      state.status = "success";
      state.total = action.payload.total;
    });
    builder.addCase(fetchBooksBySearch.rejected, (state, action) => {
      state.error = action.error;
      state.status = "error";
    });
    builder.addCase(fetchBookDetails.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchBookDetails.fulfilled, (state, action) => {
      state.result = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchBookDetails.rejected, (state) => {
      state.status = "loading";
      state.error = null;
    });
  },
});

export default bookSlice.reducer;
