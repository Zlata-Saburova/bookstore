import { IBookDetailsApi } from "../../services/types";
import { CartItem } from "../CartItem/CartItem";
import { StyledCartList } from "./styles";

interface IProps {
  books: IBookDetailsApi[];
}

export const CartList = ({ books }: IProps) => {
  return (
    <StyledCartList>
      {books.map((book) => (
        <CartItem key={book.isbn13} book={book} />
      ))}
    </StyledCartList>
  );
};
