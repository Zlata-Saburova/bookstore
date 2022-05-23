import { Outlet } from "react-router-dom";
import GlobalStyles from "../../ui/GlobalStyles";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Container, StyledApp } from "./styles";

export const MainTemplate = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Container>
          <Header />
          <Outlet />
          <Footer />
        </Container>
      </StyledApp>
    </>
  );
};
