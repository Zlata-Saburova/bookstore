import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BookSlider } from "../components/BookSlider/BookSlider";
import { InfoBox } from "../components/InfoBox/InfoBox";
import { Title } from "../components/Title/Title";
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
      <Title>Don't miss our new books</Title>
      <NewLink to="/bookstore/new">
        <BookSlider books={newBooks.books} />
      </NewLink>
      <InfoBox />
    </>
  );
};

const NewLink = styled(Link)`
  text-decoration: none;
`;
