import styled from "styled-components";

export const StyledCartList = styled.ul`
  display: grid;
  gap: 20px;
  max-width: 1120px;
  width: 100%;

  margin: 0 auto 72px;
  padding-bottom: 20px;
  margin-bottom: 40px;

  list-style: none;
  border-bottom: 1px rgb(231, 231, 231) solid;
`;

export const TotalContainer = styled.div`
  max-width: 256px;
  width: 100%;
  margin-left: auto;
`;

export const TotalPrice = styled.p`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: rgb(0, 0, 0);
`;
