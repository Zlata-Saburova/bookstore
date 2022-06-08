import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 184px;
  width: 100%;
`;

const StyledIcon = styled.div`
  width: 24px;
  height: 24px;

  &:hover {
    path {
      stroke: rgb(166, 156, 172);
    }
  }

  &:active {
    path {
      stroke: rgb(71, 73, 115);
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const BurgerIcon = styled.div`
  display: none;

  width: 24px;
  height: 24px;

  &:hover {
    path {
      stroke: rgb(166, 156, 172);
    }
  }

  &:active {
    path {
      stroke: rgb(71, 73, 115);
    }
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

const BurgerMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  width: 50%;
  height: 100vh;
  background-color: rgb(166, 156, 172);
`;

const CloseContainer = styled.button`
  display: block;
  width: 24px;
  height: 24px;

  margin-left: auto;
  margin-bottom: 20px;

  &:hover {
    path {
      stroke: rgb(166, 156, 172);
    }
  }

  &:active {
    path {
      stroke: rgb(71, 73, 115);
    }
  }
`;

const Form = styled.form`
  position: relative;

  max-width: 280px;
  width: 100%;
  margin-left: 10px;
  margin-bottom: 20px;
`;

const MenuLink = styled.button`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 32px;
  line-height: 44px;

  cursor: pointer;
`;

const StyledLink = styled(Link)`
  position: relative;

  text-decoration: none;
  color: rgb(0, 0, 0);
`;

const Number = styled.div`
  position: absolute;
  top: -6px;
  z-index: 3;
  right: 0;
  width: 7px;
  height: 15px;

  font-size: 15px;
  line-height: 15px;
  color: rgb(166, 156, 172);
  background-color: rgb(255, 255, 255);
`;
export {
  StyledIcon,
  StyledNav,
  BurgerIcon,
  BurgerMenu,
  CloseContainer,
  Form,
  MenuLink,
  StyledLink,
  Number,
};
