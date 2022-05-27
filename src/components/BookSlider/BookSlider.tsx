import Slider from "react-slick";
import { INewBookApi } from "../../services/types";
import {
  SlideContainer,
  CustomSlide,
  SliderTitle,
  SliderPrice,
  LastSlideText,
  LastSlideContainer,
} from "./styles";

interface IProps {
  books: INewBookApi[];
}

export const BookSlider = ({ books }: IProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {books.slice(0, 3).map((book) => {
          return (
            <CustomSlide key={book.isbn13} whileHover={{ scale: 1.05 }}>
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
        <CustomSlide>
          <LastSlideContainer>
            <LastSlideText>Watch all new books</LastSlideText>
          </LastSlideContainer>
        </CustomSlide>
      </Slider>
    </div>
  );
};
