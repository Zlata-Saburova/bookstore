import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BookSlider } from "../components/BookSlider/BookSlider";
import { bookApi } from "../services/bookService";
import { INewBooksApi } from "../services/types";

export const Home = () => {
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
      <NewLink to="/bookstore/new">
        <BookSlider books={newBooks.books} />
      </NewLink>
    </>
  );
};

const NewLink = styled(Link)`
  text-decoration: none;
`;
