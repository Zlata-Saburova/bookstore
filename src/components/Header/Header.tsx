import styled from "styled-components";
import logo from "../../assets/svg/logo.svg";
import { HeaderForm } from "../HeaderForm/HeaderForm";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo src={logo} alt="logo" />
        <HeaderForm />
        <Nav />
      </HeaderContainer>
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;

  border-bottom: 1px rgb(231, 231, 231) solid;
`;

const Logo = styled.img`
  display: block;

  cursor: pointer;
`;
