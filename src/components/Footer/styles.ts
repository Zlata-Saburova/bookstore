import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  margin-top: 72px;

  border-top: 1px solid rgb(231, 231, 231);
`;

const StyledFooterText = styled.p`
  padding-top: 35px;
  padding-bottom: 35px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgb(168, 168, 168);
`;

export { StyledFooter, StyledFooterText };
