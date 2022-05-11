import { SearchInput } from "../SearchInput/SearchInput";
import { HeaderFindButton } from "../HeaderFindButton/HeaderFindButton";
import { StyledHeaderForm } from "./styles";

export const HeaderForm = () => {
  return (
    <StyledHeaderForm>
      <SearchInput />
      <HeaderFindButton />
    </StyledHeaderForm>
  );
};
