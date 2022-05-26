import { Link } from "react-router-dom";
import { StyledIcon, StyledNav } from "./styles";
import { Account, Cart, Likes } from "../../assets/icons";
import { routes } from "../../routes/routes";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to={routes.FAVORITES}>
        <StyledIcon>
          <Likes />
        </StyledIcon>
      </Link>
      <Link to="">
        <StyledIcon>
          <Cart />
        </StyledIcon>
      </Link>
      <Link to="">
        <StyledIcon>
          <Account />
        </StyledIcon>
      </Link>
    </StyledNav>
  );
};
