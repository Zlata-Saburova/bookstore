import { INewBookApi } from "../../services/types";
import {
  BookSubtitle,
  BookTitle,
  StyledLink,
  StyledListItem,
  Price,
} from "./styles";

interface IProps {
  book: INewBookApi;
}

export const ListItem = ({ book }: IProps) => {
  return (
    <StyledListItem
      whileHover={{ scale: 1.05, border: "5px solid rgb(71, 73, 115)" }}
    >
      <StyledLink to={`/bookstore/books/${book.isbn13}`}>
        <img src={book.image} alt={book.title} />
        <BookTitle>{book.title}</BookTitle>
        <BookSubtitle>{book.subtitle}</BookSubtitle>
        <Price>{book.price === "$0.00" ? "Free" : book.price}</Price>
      </StyledLink>
    </StyledListItem>
  );
};
