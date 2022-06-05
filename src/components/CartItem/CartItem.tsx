import { useState } from "react";
import { IBookDetailsApi } from "../../services/types";
import { InfoBlock } from "../FavoritesItem/styles";
import {
  Btn,
  CartContainer,
  CartSubTitle,
  CartTitle,
  Counter,
  StyledLink,
} from "./styles";

interface IProps {
  book: IBookDetailsApi;
}

export const CartItem = ({ book }: IProps) => {
  const [count, setCount] = useState<number>(1);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <CartContainer>
      <StyledLink to={`/bookstore/books/${book.isbn13}`}>
        <img src={book.image} alt={book.title} />
      </StyledLink>
      <InfoBlock>
        <StyledLink to={`/bookstore/books/${book.isbn13}`}>
          <CartTitle>{book.title}</CartTitle>
          <CartSubTitle>{book.authors}</CartSubTitle>
        </StyledLink>
      </InfoBlock>
      <Counter>
        <Btn onClick={handleMinus}>-</Btn>
        <p>{count}</p>
        <Btn onClick={handlePlus}>+</Btn>
      </Counter>
    </CartContainer>
  );
};
