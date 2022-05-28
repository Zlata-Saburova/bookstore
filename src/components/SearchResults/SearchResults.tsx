import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Next, Prev } from "../../assets/icons";
import { bookApi } from "../../services/bookService";
import { ISearchBooksApi } from "../../services/types";
import { List } from "../List/List";
import { Title } from "../Title/Title";
import { Pagination, Button, Pages, Page, CurrentPage } from "./styles";

export const SearchResults = () => {
  const { title = "", page = "" } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchResult, setSearchResult] = useState<ISearchBooksApi>();
  const navigation = useNavigate();

  const handleNextButton = () => {
    if (searchResult?.total && +page < Math.ceil(+searchResult?.total) / 10) {
      navigation(`/bookstore/search/${title}/${Number(page) + 1}`);
    }
  };

  const handlePrevButton = () => {
    if (+page > 1) {
      navigation(`/bookstore/search/${title}/${Number(page) - 1}`);
    }
  };

  useEffect(() => {
    bookApi.getBooksBySearch(title, page).then((books) => {
      setSearchResult(books);
    });
  }, [title, page]);

  return (
    <>
      <Title>Search results for: {title}</Title>
      <List books={searchResult?.books ? searchResult?.books : []}></List>
      <Pagination>
        <Button type="button" onClick={handlePrevButton}>
          <Prev />
          Prev
        </Button>
        <Pages>
          <Page onClick={handlePrevButton}>{+page > 1 ? +page - 1 : ""}</Page>
          <CurrentPage>{page}</CurrentPage>
          <Page onClick={handleNextButton}>
            {searchResult?.total && +page < Math.ceil(+searchResult?.total) / 10
              ? +page + 1
              : ""}
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
