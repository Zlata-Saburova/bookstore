import React from "react";
import { INewBookApi } from "../../services/types";
import { ListItem } from "../ListItem/ListItem";
import { StyledList } from "./styles";

interface IProps {
  books: INewBookApi[];
}

export const List = ({ books }: IProps) => {
  return (
    <StyledList>
      {books.map((book) => (
        <ListItem key={book.isbn13} book={book} />
      ))}
    </StyledList>
  );
};
