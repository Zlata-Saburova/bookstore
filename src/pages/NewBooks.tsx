import React, { useEffect } from "react";
import { List } from "../components/List/List";
import { Title } from "../components/Title/Title";
import { InfoBox } from "../components/InfoBox/InfoBox";
import { getBooks } from "../store/selectors/booksSelectors";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { fetchBooks } from "../store/slices/booksSlice";

export const NewBooks = () => {
  const { books } = useAppSelector(getBooks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <Title>New Releases Books</Title>
      <List books={books} />
      <InfoBox />
    </>
  );
};
