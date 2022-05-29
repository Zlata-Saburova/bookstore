import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Slider from "react-slick";
import { BookSlider } from "../components/BookSlider/BookSlider";
import { List } from "../components/List/List";
import { Title } from "../components/Title/Title";
import { routes } from "../routes/routes";
import { useAppSelector } from "../store/hooks/hooks";
import { getUserInfo } from "../store/selectors/userSelectors";
import { RootState } from "../store/store";

export const Favorites = () => {
  const { isAuth } = useSelector(({ user }: RootState) => user);
  const { favorites } = useAppSelector(getUserInfo);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerPadding: "60px",
    centerMode: true,
  };

  if (isAuth) {
    return (
      <>
        <Title>Favorites</Title>
        <List books={favorites}></List>
        <BookSlider settings={settings} />
      </>
    );
  }

  return <Navigate to={routes.SIGN_IN} />;
};
