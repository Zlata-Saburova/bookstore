import { Outlet } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

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

const StyledApp = styled.div`
  padding: 0 16px;
  max-width: 1920px;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;
