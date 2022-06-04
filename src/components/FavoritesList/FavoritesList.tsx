import { StyledFavList } from "./styles";
import { IBookDetailsApi } from "../../services/types";
import { FavoritesItem } from "../FavoritesItem/FavoritesItem";

interface IProps {
  books: IBookDetailsApi[];
}

export const FavoritesList = ({ books }: IProps) => {
  return (
    <StyledFavList>
      {books.map((book) => (
        <FavoritesItem key={book.isbn13} book={book} />
      ))}
    </StyledFavList>
  );
};
