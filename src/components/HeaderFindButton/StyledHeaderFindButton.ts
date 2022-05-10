import styled from "styled-components";
import search from "../../assets/svg/search.svg";

export const StyledHeaderFindButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;

  max-width: 24px;
  width: 100%;
  height: 24px;

  background-image: url(${search});

  cursor: pointer;
`;
