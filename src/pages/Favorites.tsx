import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { routes } from "../routes/routes";
import { RootState } from "../store/store";

export const Favorites = () => {
  const { isAuth } = useSelector(({ user }: RootState) => user);

  if (isAuth) {
    return <div>Favorites</div>;
  }

  return <Navigate to={routes.SIGN_IN} />;
};
