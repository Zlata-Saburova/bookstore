import styled from "styled-components";

const StyledHeader = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;

  border-bottom: 1px rgb(231, 231, 231) solid;
`;

const Logo = styled.img`
  display: block;

  cursor: pointer;
`;

export { StyledHeader, HeaderContainer, Logo };
