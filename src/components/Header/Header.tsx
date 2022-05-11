import logo from "../../assets/svg/logo.svg";
import { HeaderForm } from "../HeaderForm/HeaderForm";
import { Nav } from "../Nav/Nav";
import { StyledHeader, HeaderContainer, Logo } from "./styles";

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
