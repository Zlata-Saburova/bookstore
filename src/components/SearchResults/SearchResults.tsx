import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Next, Prev } from "../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getBooks } from "../../store/selectors/booksSelectors";
import { fetchBooksBySearch } from "../../store/slices/booksSlice";
import { List } from "../List/List";
import { Title } from "../Title/Title";
import { Pagination, Button, Pages, Page, CurrentPage } from "./styles";

export const SearchResults = () => {
  const { title = "", page = "" } = useParams();
  const { books, total } = useAppSelector(getBooks);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigation = useNavigate();

  const handleNextButton = () => {
    if (total && +page < Math.ceil(+total) / 10) {
      navigation(`/bookstore/search/${title}/${Number(page) + 1}`);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevButton = () => {
    if (+page > 1) {
      navigation(`/bookstore/search/${title}/${Number(page) - 1}`);
      window.scrollTo(0, 0);
    }
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooksBySearch({ title, page }));
  }, [title, dispatch, page]);

  return (
    <>
      <Title>Search results for: {title}</Title>
      <List books={books ? books : []}></List>
      <Pagination>
        <Button type="button" onClick={handlePrevButton}>
          <Prev />
          Prev
        </Button>
        <Pages>
          <CurrentPage>{page}</CurrentPage>
          <Page onClick={handleNextButton}>
            {total && +page < Math.ceil(+total) / 10 ? +page + 1 : ""}
          </Page>
          <Page onClick={handleNextButton}>
            {total && +page < Math.ceil(+total) / 10 ? +page + 2 : ""}
          </Page>
        </Pages>
        <Button type="button" onClick={handleNextButton}>
          Next
          <Next />
        </Button>
      </Pagination>
    </>
  );
};
