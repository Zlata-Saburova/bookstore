import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { routes } from "../routes/routes";
import { RootStore } from "../store/store";

export const Cart = () => {
  const { isAuth } = useSelector(({ user }: RootStore) => user);

  if (isAuth) {
    return <div>Cart</div>;
  }

  return <Navigate to={routes.SIGN_IN} />;
};
