import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import { HeaderForm } from "../HeaderForm/HeaderForm";
import { Nav } from "../Nav/Nav";
import { StyledHeader, HeaderContainer, Logo } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Link to="/bookstore">
          <Logo src={logo} alt="logo" />
        </Link>
        <HeaderForm />
        <Nav />
      </HeaderContainer>
    </StyledHeader>
  );
};
