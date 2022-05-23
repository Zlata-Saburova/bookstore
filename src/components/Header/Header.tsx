import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons";
import { HeaderForm } from "../HeaderForm/HeaderForm";
import { Nav } from "../Nav/Nav";
import { StyledHeader, LogoContainer } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/bookstore">
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Link>
      <HeaderForm />
      <Nav />
    </StyledHeader>
  );
};
