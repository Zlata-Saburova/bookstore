import React, { useEffect, useState } from "react";
import { List } from "../components/List/List";
import { bookApi } from "../services/bookService";
import { INewBooksApi } from "../services/types";

export const NewBooks = () => {
  console.log(bookApi.getNewBooks());
  const [newBooks, setNewBooks] = useState<INewBooksApi>({
    books: [],
    error: "",
    total: "",
  });

  useEffect(() => {
    bookApi.getNewBooks().then((books) => {
      setNewBooks(books);
    });
  }, []);
  return <List books={newBooks.books} />;
};
