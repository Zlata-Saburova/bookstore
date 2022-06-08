import { useNavigate } from "react-router-dom";
import {
  BurgerIcon,
  BurgerMenu,
  CloseContainer,
  Form,
  MenuLink,
  StyledIcon,
  StyledLink,
  StyledNav,
  Number,
} from "./styles";
import {
  AccountSVG,
  Burger,
  CartSvg,
  Close,
  Likes,
  Search,
} from "../../assets/icons";
import { routes } from "../../routes/routes";
import { FindButton, SearchInput } from "../HeaderForm/styles";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../store/hooks/hooks";
import { getCart, getUserInfo } from "../../store/selectors/userSelectors";

export const Nav = () => {
  const { register, handleSubmit } = useForm();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "initial";
  };

  const onSubmit = (data: any) => {
    navigate(`/bookstore/search/${data.title}/1`);
    setTitle("");
    setIsMenuOpen(false);
    document.body.style.overflow = "initial";
  };

  const handleMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "initial";
  };

  const { favorites } = useAppSelector(getUserInfo);
  const { cartItems } = useAppSelector(getCart);

  return (
    <StyledNav>
      <StyledLink to={routes.FAVORITES}>
        <StyledIcon>
          {favorites.length >= 1 ? <Number>{favorites.length}</Number> : ""}
          <Likes />
        </StyledIcon>
      </StyledLink>
      <StyledLink to={routes.CART}>
        <StyledIcon>
          {cartItems.length >= 1 ? <Number>{cartItems.length}</Number> : ""}
          <CartSvg />
        </StyledIcon>
      </StyledLink>
      <StyledLink to={routes.ACCOUNT}>
        <StyledIcon>
          <AccountSVG />
        </StyledIcon>
      </StyledLink>
      <BurgerIcon>
        <Burger onClick={handleOpen} />
      </BurgerIcon>
      {isMenuOpen ? (
        <BurgerMenu>
          <CloseContainer onClick={handleClose}>
            <Close />
          </CloseContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <SearchInput
              type="text"
              placeholder="Search"
              {...register("title", {
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value),
              })}
              value={title}
            />
            <FindButton type="submit">
              <Search />
            </FindButton>
          </Form>
          <StyledLink to={routes.FAVORITES}>
            <MenuLink onClick={handleMenu}>Favorites</MenuLink>
          </StyledLink>
          <StyledLink to={routes.CART}>
            <MenuLink onClick={handleMenu}>Cart</MenuLink>
          </StyledLink>
          <StyledLink to={routes.ACCOUNT}>
            <MenuLink onClick={handleMenu}>Account</MenuLink>
          </StyledLink>
        </BurgerMenu>
      ) : (
        ""
      )}
    </StyledNav>
  );
};
