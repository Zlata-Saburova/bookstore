import { Link } from "react-router-dom";
import likes from "../../assets/svg/likes.svg";
import cart from "../../assets/svg/cart.svg";
import account from "../../assets/svg/account..svg";
import { StyledIcon, StyledNav } from "./styles";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to="">
        <StyledIcon src={likes} alt="likes" />
      </Link>
      <Link to="">
        <StyledIcon src={cart} alt="cart" />
      </Link>
      <Link to="">
        <StyledIcon src={account} alt="accaunt" />
      </Link>
    </StyledNav>
  );
};
