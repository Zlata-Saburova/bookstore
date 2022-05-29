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
  Preview,
  Property,
  PropertyList,
  PropertyTitle,
  RateContainer,
  Social,
  SocialsLink,
  StyledLI,
  LikeContainer,
  Tab,
  TabInfo,
  TabsContainer,
} from "./styles";
import { ReactNode, useEffect, useId, useState } from "react";
import { Link, Element } from "react-scroll";
import {
  Twitter,
  DarkStar,
  Details,
  Facebook,
  LightStar,
  Likes,
} from "../../assets/icons";
import { InfoBox } from "../InfoBox/InfoBox";
import { useAppDispatch } from "../../store/hooks/hooks";
import { IBook } from "../../store/types";
import { addFavorite } from "../../store/slices/userReducer";

interface IProps {
  book: IBookDetailsApi;
}

export const Book = ({ book }: IProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const newArr = Object.assign(book);

  const [active, setActive] = useState("desc");

  const handleTab = (activeId: string) => {
    setActive(activeId);
  };

  const chapters = book.pdf ? Object.values(book.pdf) : [];

  const handleFavorite = (book: IBook) => {
    dispatch(addFavorite(book));
  };

  return (
    <>
      <Container>
        <ImgContainer>
          <img src={book.image} alt={book.title} />
          <LikeContainer onClick={() => handleFavorite(book)}>
            <Likes />
          </LikeContainer>
        </ImgContainer>
        <InfoContainer>
          <RateContainer>
            <BookPrice>
              {book.price === "$0.00" ? "Free" : book.price}
            </BookPrice>
            <div>{drawRating(`${book.rating}`)}</div>
          </RateContainer>
          <PropertyList>
            {filteredKeys.slice(1, 4).map((property, index) => {
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
            </Link>
          </Button>
          <Details />
          <CartButton>add to cart</CartButton>
          {chapters.map((chapter) => (
            <Preview href={chapter}>Preview book</Preview>
          ))}
        </InfoContainer>
      </Container>

      <TabsContainer>
        <Tab onClick={() => handleTab("desc")} isActive={active === "desc"}>
          Description
        </Tab>
        <Tab
          onClick={() => handleTab("authors")}
          isActive={active === "authors"}
        >
          Authors
        </Tab>
      </TabsContainer>
      <TabInfo>{newArr[active]}</TabInfo>
      <SocialsLink>
        <Social>
          <Facebook />
        </Social>
        <Social>
          <Twitter />
        </Social>
      </SocialsLink>
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
      <InfoBox />
    </>
  );
};
