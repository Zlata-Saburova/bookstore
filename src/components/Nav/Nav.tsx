import { Link } from "react-router-dom";
import styled from "styled-components";
import likes from "../../assets/svg/likes.svg";
import cart from "../../assets/svg/cart.svg";
import accaunt from "../../assets/svg/accaunt.svg";

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
        <StyledIcon src={accaunt} alt="accaunt" />
      </Link>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 184px;
  width: 100%;
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
`;
