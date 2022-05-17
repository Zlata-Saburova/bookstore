import { Link } from "react-router-dom";
import styled from "styled-components";
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
    <StyledListItem whileHover={{ scale: 1.05 }}>
      <StyledLink to={`/bookstore/books/${book.isbn13}`}>
        <img src={book.image} alt={book.title} />
        <StyledBookTitle>{book.title}</StyledBookTitle>
        <StyledBookSubtitle>{book.subtitle}</StyledBookSubtitle>
        <StyledPrice>
          {book.price === "$0.00" ? "Free" : book.price}
        </StyledPrice>
      </StyledLink>
    </StyledListItem>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;
