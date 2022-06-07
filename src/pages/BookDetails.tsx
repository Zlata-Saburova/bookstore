import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../components/Book/Book";
import { Title } from "../components/Title/Title";
import { BackButton } from "../components/BackButton/BackButton";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { getBooks } from "../store/selectors/booksSelectors";
import { fetchBookDetails } from "../store/slices/booksSlice";

export const BookDetails = () => {
  const { id = "" } = useParams();

  const { result } = useAppSelector(getBooks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [id, dispatch]);

  return (
    <>
      <BackButton />
      <Title>{result.title}</Title>
      <Book book={result} />
    </>
  );
};
