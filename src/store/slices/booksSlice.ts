import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../types";

const initialState: IBook[] = [
  {
    title: "Azure Pipelines Succinctly",
    subtitle: "",
    isbn13: "9781642002133",
    price: "$0.00",
    image: "https://itbook.store/img/books/9781642002133.png",
    url: "https://itbook.store/books/9781642002133",
  },
  {
    title: "Microsoft Excel Inside Out",
    subtitle: "Office 2021 and Microsoft 365",
    isbn13: "9780137559534",
    price: "$42.16",
    image: "https://itbook.store/img/books/9780137559534.png",
    url: "https://itbook.store/books/9780137559534",
  },
  {
    title: "Windows Internals, Part 2, 7th Edition",
    subtitle: "",
    isbn13: "9780135462409",
    price: "$53.49",
    image: "https://itbook.store/img/books/9780135462409.png",
    url: "https://itbook.store/books/9780135462409",
  },
  {
    title: "Microsoft Office Inside Out",
    subtitle: "Office 2021 and Microsoft 365",
    isbn13: "9780137564095",
    price: "$36.93",
    image: "https://itbook.store/img/books/9780137564095.png",
    url: "https://itbook.store/books/9780137564095",
  },
  {
    title: "Microsoft Excel Step by Step",
    subtitle: "Office 2021 and Microsoft 365",
    isbn13: "9780137564279",
    price: "$30.62",
    image: "https://itbook.store/img/books/9780137564279.png",
    url: "https://itbook.store/books/9780137564279",
  },
  {
    title: "Microsoft Excel Data Analysis and Business Modeling, 7th Edition",
    subtitle: "Office 2021 and Microsoft 365",
    isbn13: "9780137613663",
    price: "$34.87",
    image: "https://itbook.store/img/books/9780137613663.png",
    url: "https://itbook.store/books/9780137613663",
  },
  {
    title: "Intermediate Statistics with R",
    subtitle: "",
    isbn13: "1001651662833",
    price: "$0.00",
    image: "https://itbook.store/img/books/1001651662833.png",
    url: "https://itbook.store/books/1001651662833",
  },
];

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
