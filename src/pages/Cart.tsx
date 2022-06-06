import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { CartList } from "../components/CartList/CartList";
import { Title } from "../components/Title/Title";
import { routes } from "../routes/routes";
import { useAppSelector } from "../store/hooks/hooks";
import { getCart } from "../store/selectors/userSelectors";
import { RootState } from "../store/store";

export const Cart = () => {
  const { isAuth } = useSelector(({ user }: RootState) => user);
  const { cartItems } = useAppSelector(getCart);

  if (isAuth) {
    return (
      <>
        <Title>Your Cart</Title>
        <CartList books={cartItems} />
      </>
    );
  }

  return <Navigate to={routes.SIGN_IN} />;
};
