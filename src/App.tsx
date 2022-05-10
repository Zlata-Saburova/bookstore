import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { MainTemplate } from "./components/MainTemplate";
import GlobalStyles from "./GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Routes>
          <Route path="/" element={<MainTemplate />} />
        </Routes>
      </StyledApp>
    </>
  );
};

const StyledApp = styled.div``;
