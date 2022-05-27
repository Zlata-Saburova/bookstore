import { Link } from "react-router-dom";
import { StyledIcon, StyledNav } from "./styles";
import { AccountSVG, CartSvg, Likes } from "../../assets/icons";
import { routes } from "../../routes/routes";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to={routes.FAVORITES}>
        <StyledIcon>
          <Likes />
        </StyledIcon>
      </Link>
      <Link to={routes.CART}>
        <StyledIcon>
          <CartSvg />
        </StyledIcon>
      </Link>
      <Link to={routes.ACCOUNT}>
        <StyledIcon>
          <AccountSVG />
        </StyledIcon>
      </Link>
    </StyledNav>
  );
};
