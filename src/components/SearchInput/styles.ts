import styled from "styled-components";
import { typography } from "../../ui/typography";

export const StyledSearchInput = styled.input`
  max-width: 542px;
  width: 100%;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 20px;

  ${typography.input}

  border: 1px solid rgb(231, 231, 231);
`;
