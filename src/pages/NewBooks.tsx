import React, { useEffect, useState } from "react";
import { List } from "../components/List/List";
import { bookApi } from "../services/bookService";
import { INewBooksApi } from "../services/types";
import { Title } from "../components/Title/Title";
import { InfoBox } from "../components/InfoBox/InfoBox";

export const NewBooks = () => {
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
  return (
    <>
      <Title>New Releases Books</Title>
      <List books={newBooks.books} />
      <InfoBox />
    </>
  );
};
