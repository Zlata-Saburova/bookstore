import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(352px, 1fr));
  column-gap: 32px;
  row-gap: 49px;

  max-width: 1120px;
  width: 100%;
  margin: 0 auto 72px;

  list-style: none;
`;
