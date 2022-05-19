import { IBookDetailsApi } from "../../services/types";
import {
  BookPrice,
  Button,
  CartButton,
  Container,
  DetailsLI,
  DetailsTitle,
  ImgContainer,
  InfoContainer,
  InfoDetails,
  Property,
  PropertyList,
  PropertyTitle,
  RateContainer,
  StyledLI,
  Tab,
  TabInfo,
  TabsContainer,
} from "./styles";
import darkStart from "../../assets/svg/darkStar.svg";
import lightStart from "../../assets/svg/lightStart.svg";
import details from "../../assets/svg/details.svg";
import { ReactNode, useId, useState } from "react";
import { Link, Element } from "react-scroll";

interface IProps {
  book: IBookDetailsApi;
}

export const Book = ({ book }: IProps) => {
  const id = useId();

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
  const forbidenKeys: string[] = [
    "desc",
    "error",
    "image",
    "isbn10",
    "isbn13",
    "pdf",
    "url",
  ];
  const filteredKeys = keys.filter((el) => !forbidenKeys.includes(el));
  console.log(filteredKeys);

  const newArr = Object.assign(book);

  return (
    <>
      <Container>
        <ImgContainer>
          <img src={book.image} alt={book.title} />
        </ImgContainer>
        <InfoContainer>
          <RateContainer>
            <BookPrice>
              {book.price === "$0.00" ? "Free" : book.price}
            </BookPrice>
            <div>{drawRating(`${book.rating}`)}</div>
          </RateContainer>
          <PropertyList>
            {filteredKeys.slice(0, 3).map((property, index) => {
              if (newArr[property]) {
                return (
                  <StyledLI key={`${id}-${index}`}>
                    <PropertyTitle>{property}</PropertyTitle>
                    <Property>{newArr[property]}</Property>
                  </StyledLI>
                );
              }
            })}
          </PropertyList>
          <Button>
            <Link to="details" duration={500} smooth={true}>
              More detailse
              <img src={details} alt="arrow" />
            </Link>
          </Button>
          <CartButton>add to cart</CartButton>
        </InfoContainer>
      </Container>
      <div>
        <TabsContainer>
          <Tab>Description</Tab>
          <Tab>Authors</Tab>
          <Tab>Reviews</Tab>
        </TabsContainer>
        <TabInfo>{book.desc}</TabInfo>
      </div>
      <Element name="details">
        <InfoDetails>
          {filteredKeys.map((property, index) => {
            if (newArr[property]) {
              return (
                <DetailsLI key={`${id}+${index}`}>
                  <DetailsTitle>{property}</DetailsTitle>
                  <Property>{newArr[property]}</Property>
                </DetailsLI>
              );
            }
          })}
        </InfoDetails>
      </Element>
    </>
  );
};
