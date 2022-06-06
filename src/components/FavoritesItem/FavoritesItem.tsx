import { ReactNode, useId } from "react";
import { DarkStar, LightStar, Likes } from "../../assets/icons";
import { IBookDetailsApi } from "../../services/types";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addBookToCart } from "../../store/slices/cartReducer";
import { deleteFavorite } from "../../store/slices/userReducer";
import { BookPrice, RateContainer } from "../Book/styles";
import {
  CartBtn,
  FavContainer,
  FavSubTitle,
  FavTitle,
  Img,
  InfoBlock,
  LikeBtn,
  StyledLink,
} from "./styles";

interface IProps {
  book: IBookDetailsApi;
}

export const FavoritesItem = ({ book }: IProps) => {
  const id = useId();
  const dispatch = useAppDispatch();

  const drawRating = (rating: string): ReactNode[] => {
    const stars = [];
    for (let i = 0; i <= 4; i++) {
      if (i < +rating) {
        stars.push(<DarkStar key={`${id}+${i * 33}`} />);
      } else {
        stars.push(<LightStar key={`${id}+${i * 55}`} />);
      }
    }
    return stars;
  };

  const handleFavorite = (book: IBookDetailsApi) => {
    dispatch(deleteFavorite(book));
  };

  const handleCart = (book: IBookDetailsApi) => {
    dispatch(addBookToCart({ ...book, amount: 1 }));
  };

  return (
    <FavContainer
      whileHover={{ scale: 1.03, border: "5px solid rgb(71, 73, 115)" }}
    >
      <StyledLink to={`/bookstore/books/${book.isbn13}`}>
        <Img src={book.image} alt={book.title} />
      </StyledLink>
      <InfoBlock>
        <StyledLink to={`/bookstore/books/${book.isbn13}`}>
          <FavTitle>{book.title}</FavTitle>
          <FavSubTitle>{book.authors}</FavSubTitle>
          <RateContainer>
            <BookPrice>
              {book.price === "$0.00" ? "Free" : book.price}
            </BookPrice>
            <div>{drawRating(`${book.rating}`)}</div>
          </RateContainer>
        </StyledLink>
        <CartBtn type="button" onClick={() => handleCart(book)}>
          Add to cart
        </CartBtn>
      </InfoBlock>
      <LikeBtn onClick={() => handleFavorite(book)}>
        <Likes />
      </LikeBtn>
    </FavContainer>
  );
};
