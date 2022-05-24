import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookApi } from "../../services/bookService";
import { ISearchBooksApi } from "../../services/types";
import { List } from "../List/List";
import { Title } from "../Title/Title";

export const SearchResults = () => {
  const { title = "", page = "" } = useParams();

  const [searchResult, setSearchResult] = useState<ISearchBooksApi>();

  useEffect(() => {
    bookApi.getBooksBySearch(title, page).then((books) => {
      setSearchResult(books);
      console.log(books);
    });
  }, [title, page]);
  return (
    <div>
      <Title>Search results for: {title}</Title>
      <List books={searchResult?.books ? searchResult?.books : []}></List>
    </div>
  );
};
