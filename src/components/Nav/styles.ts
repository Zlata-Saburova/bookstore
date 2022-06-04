import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 184px;
  width: 100%;
`;

const StyledIcon = styled.div`
  width: 24px;
  height: 24px;

  &:hover {
    path {
      stroke: rgb(166, 156, 172);
    }
  }

  &:active {
    path {
      stroke: rgb(71, 73, 115);
    }
  }
`;

export { StyledIcon, StyledNav };
