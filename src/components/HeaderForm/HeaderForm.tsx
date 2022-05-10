import styled from "styled-components";
import { SearchInput } from "../SearchInput/SearchInput";
import { HeaderFindButton } from "../HeaderFindButton/HeaderFindButton";

export const HeaderForm = () => {
  return (
    <StyledHeaderForm>
      <SearchInput />
      <HeaderFindButton />
    </StyledHeaderForm>
  );
};

const StyledHeaderForm = styled.form`
  position: relative;

  max-width: 542px;
  width: 100%;
`;
