import React from "react";
import { INewBookApi } from "../../services/types";
import {
  StyledBookSubtitle,
  StyledBookTitle,
  StyledListItem,
  StyledPrice,
} from "./styles";

interface IProps {
  book: INewBookApi;
}

export const ListItem = ({ book }: IProps) => {
  return (
    <StyledListItem>
      <img src={book.image} alt={book.title} />
      <StyledBookTitle>{book.title}</StyledBookTitle>
      <StyledBookSubtitle>{book.subtitle}</StyledBookSubtitle>
      <StyledPrice>{book.price === "$0.00" ? "Free" : book.price}</StyledPrice>
    </StyledListItem>
  );
};
