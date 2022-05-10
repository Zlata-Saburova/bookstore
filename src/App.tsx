import React from "react";
import styled from "styled-components";
import { MainTemplate } from "./components/MainTemplate";
import GlobalStyles from "./GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <MainTemplate />
      </StyledApp>
    </>
  );
};

const StyledApp = styled.div``;
