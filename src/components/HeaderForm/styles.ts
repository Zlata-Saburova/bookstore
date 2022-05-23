import styled from "styled-components";
import { typography } from "../../ui/typography";

export const StyledHeaderForm = styled.form`
  position: relative;

  max-width: 542px;
  width: 100%;
`;

export const SearchInput = styled.input`
  max-width: 542px;
  width: 100%;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 20px;

  ${typography.input}

  border: 1px solid rgb(231, 231, 231);
`;

export const FindButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;

  max-width: 24px;
  width: 100%;
  height: 24px;

  cursor: pointer;
`;
