import { useEffect, useState } from "react";
import { IBookCartItem } from "../../store/types";
import { CartItem } from "../CartItem/CartItem";
import { StyledCartList, TotalContainer, TotalPrice } from "./styles";

interface IProps {
  books: IBookCartItem[];
}

export const CartList = ({ books }: IProps) => {
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    let totalAmount = 0.0;
    books.forEach((book) => {
      totalAmount += book.amount * Number(book.price.slice(1));
    });
    setTotal(totalAmount);
  }, [books]);

  return (
    <>
      <StyledCartList>
        {books.map((book) => (
          <CartItem key={book.isbn13} book={book} />
        ))}
      </StyledCartList>
      <TotalContainer>
        <TotalPrice>Total: ${total.toFixed(2)} </TotalPrice>
      </TotalContainer>
    </>
  );
};
