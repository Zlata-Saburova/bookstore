import { ReactNode, useId } from "react";
import { DarkStar, LightStar, Likes } from "../../assets/icons";
import { IBookDetailsApi } from "../../services/types";
import { useAppDispatch } from "../../store/hooks/hooks";
import { deleteFavorite } from "../../store/slices/userReducer";
import { BookPrice, RateContainer } from "../Book/styles";
import {
  FavContainer,
  FavSubTitle,
  FavTitle,
  InfoBlock,
  LikeBtn,
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

  return (
    <FavContainer>
      <img src={book.image} alt={book.title} />
      <InfoBlock>
        <FavTitle>{book.title}</FavTitle>
        <FavSubTitle>{book.authors}</FavSubTitle>
        <RateContainer>
          <BookPrice>{book.price === "$0.00" ? "Free" : book.price}</BookPrice>
          <div>{drawRating(`${book.rating}`)}</div>
        </RateContainer>
      </InfoBlock>
      <LikeBtn onClick={() => handleFavorite(book)}>
        <Likes />
      </LikeBtn>
    </FavContainer>
  );
};
