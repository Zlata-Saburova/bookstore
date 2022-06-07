import { Close, Minus, Plus } from "../../assets/icons";
import { IBookDetailsApi } from "../../services/types";
import { useAppDispatch } from "../../store/hooks/hooks";
import {
  decreaseAmount,
  increaseAmount,
  removeBook,
} from "../../store/slices/cartReducer";
import { IBookCartItem } from "../../store/types";
import { Img } from "../FavoritesItem/styles";
import {
  Btn,
  BtnClose,
  CartContainer,
  CartSubTitle,
  CartTitle,
  Count,
  Counter,
  InfoBlock,
  Price,
  StyledLink,
} from "./styles";

interface IProps {
  book: IBookCartItem;
}

export const CartItem = ({ book }: IProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveBook = (book: IBookDetailsApi) => {
    dispatch(removeBook(book));
  };

  const handlePlus = (book: IBookCartItem) => {
    dispatch(increaseAmount(book));
  };

  const handleMinus = (book: IBookCartItem) => {
    if (book.amount > 1) {
      dispatch(decreaseAmount(book));
    }
  };

  return (
    <CartContainer
      whileHover={{ scale: 1.03, border: "5px solid rgb(71, 73, 115)" }}
    >
      <StyledLink to={`/bookstore/books/${book.isbn13}`}>
        <Img src={book.image} alt={book.title} />
      </StyledLink>
      <InfoBlock>
        <StyledLink to={`/bookstore/books/${book.isbn13}`}>
          <CartTitle>{book.title}</CartTitle>
          <CartSubTitle>{book.authors}</CartSubTitle>
        </StyledLink>
        <Counter>
          <Btn onClick={() => handleMinus(book)}>
            <Minus />
          </Btn>
          <Count>{book.amount}</Count>
          <Btn onClick={() => handlePlus(book)}>
            <Plus />
          </Btn>
        </Counter>
      </InfoBlock>
      <Price>${(Number(book.price.slice(1)) * book.amount).toFixed(2)}</Price>
      <BtnClose onClick={() => handleRemoveBook(book)}>
        <Close />
      </BtnClose>
    </CartContainer>
  );
};
