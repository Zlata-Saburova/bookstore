import { IBookDetailsApi } from "../services/types";
import {
  BookPrice,
  Button,
  ImgContainer,
  InfoContainer,
  Property,
  PropertyList,
  PropertyTitle,
  RateContainer,
  StyledBook,
  StyledLI,
} from "./styles";
import darkStart from "../assets/svg/darkStar.svg";
import lightStart from "../assets/svg/lightStart.svg";
import { ReactNode, useId, useState } from "react";

interface IProps {
  book: IBookDetailsApi;
}

export const Book = ({ book }: IProps) => {
  const id = useId();
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const drawRating = (rating: string): ReactNode[] => {
    const stars = [];
    for (let i = 0; i <= 4; i++) {
      if (i < +rating) {
        stars.push(<img src={darkStart} alt="dark" key={`${id}+${i * 33}`} />);
      } else {
        stars.push(
          <img src={lightStart} alt="light" key={`${id}+${i * 55}`} />
        );
      }
    }
    return stars;
  };

  const keys: string[] = Object.keys(book);
  const newArr = Object.assign(book);

  return (
    <StyledBook>
      <ImgContainer>
        <img src={book.image} alt={book.title} />
      </ImgContainer>
      <InfoContainer>
        <RateContainer>
          <BookPrice>{book.price} </BookPrice>
          <div>{drawRating(`${book.rating}`)}</div>
        </RateContainer>
        <PropertyList visable={visible}>
          {keys.map((property, index) => {
            if (
              property !== "pdf" &&
              property !== "desc" &&
              property !== "error"
            ) {
              return (
                <StyledLI key={`${id}-${index}`}>
                  <PropertyTitle>{property}</PropertyTitle>
                  <Property>{newArr[property]}</Property>
                </StyledLI>
              );
            }
          })}
        </PropertyList>
        <Button onClick={handleVisible}>More detailse</Button>
      </InfoContainer>
    </StyledBook>
  );
};
