import { useEffect, useState } from "react";
import Slider from "react-slick";
import { bookApi } from "../../services/bookService";
import { INewBookApi, INewBooksApi } from "../../services/types";
import {
  SlideContainer,
  CustomSlide,
  SliderTitle,
  SliderPrice,
  LastSlideText,
  LastSlideContainer,
} from "./styles";

interface IProps {
  settings: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    centerMode: boolean;
    className?: string;
    centerPadding?: string;
  };
}

export const BookSlider = ({ settings }: IProps) => {
  const [newBooks, setNewBooks] = useState<INewBooksApi>({
    books: [],
    error: "",
    total: "",
  });

  useEffect(() => {
    bookApi.getNewBooks().then((books) => {
      setNewBooks(books);
    });
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {newBooks.books.slice(0, 5).map((book) => {
          return (
            <CustomSlide key={book.isbn13} whileHover={{ scale: 1.03 }}>
              <SlideContainer>
                <img src={book.image} alt={book.title} />
                <div>
                  <SliderTitle>{book.title}</SliderTitle>
                  <SliderPrice>
                    {book.price === "$0.00" ? "Free" : book.price}
                  </SliderPrice>
                </div>
              </SlideContainer>
            </CustomSlide>
          );
        })}
        <CustomSlide whileHover={{ scale: 1.03 }}>
          <LastSlideContainer>
            <LastSlideText>Watch all new books</LastSlideText>
          </LastSlideContainer>
        </CustomSlide>
      </Slider>
    </div>
  );
};
