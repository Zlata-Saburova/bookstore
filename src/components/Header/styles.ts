import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 72px;
  padding-top: 24px;
  padding-bottom: 24px;

  border-bottom: 1px rgb(231, 231, 231) solid;
`;

const LogoContainer = styled.div`
  cursor: pointer;
`;

export { StyledHeader, LogoContainer };
