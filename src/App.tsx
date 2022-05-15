import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Container>
          <AppRouter />
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
