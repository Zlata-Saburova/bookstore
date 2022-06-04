import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { BookSlider } from "../components/BookSlider/BookSlider";
import { FavoritesList } from "../components/FavoritesList/FavoritesList";
import { Title } from "../components/Title/Title";
import { routes } from "../routes/routes";
import { useAppSelector } from "../store/hooks/hooks";
import { getUserInfo } from "../store/selectors/userSelectors";
import { RootState } from "../store/store";
import { typography } from "../ui/typography";

export const Favorites = () => {
  const { isAuth } = useSelector(({ user }: RootState) => user);
  const { favorites } = useAppSelector(getUserInfo);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "50px",
    centerMode: true,
  };

  if (isAuth) {
    return (
      <>
        <Title>Favorites</Title>
        <FavoritesList books={favorites}/>
        <NewTitle>New books</NewTitle>
        <Link to="/bookstore/new">
          <BookSlider settings={settings} />
        </Link>
      </>
    );
  }

  return <Navigate to={routes.SIGN_IN} />;
};

const NewTitle = styled.h2`
  ${typography.H2}
`;
