import { useEffect } from "react";
import Slider from "react-slick";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getBooks } from "../../store/selectors/booksSelectors";
import { fetchBooks } from "../../store/slices/booksSlice";
import {
  SlideContainer,
  CustomSlide,
  SliderTitle,
  SliderPrice,
  LastSlideText,
  LastSlideContainer,
  Img,
} from "./styles";

export const BookSlider = () => {
  const { books } = useAppSelector(getBooks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {books.slice(0, 5).map((book) => {
          return (
            <CustomSlide key={book.isbn13} whileHover={{ scale: 1.03 }}>
              <SlideContainer>
                <Img src={book.image} alt={book.title} />
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
