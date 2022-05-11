import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <AppRouter />
      </StyledApp>
    </>
  );
};

const StyledApp = styled.div``;
