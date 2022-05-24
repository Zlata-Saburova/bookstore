import { FindButton, SearchInput, StyledHeaderForm } from "./styles";
import { useForm } from "react-hook-form";
import { Search } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

export const HeaderForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    navigate(`/bookstore/search/${data.title}/1`);
  };

  return (
    <StyledHeaderForm onSubmit={handleSubmit(onSubmit)}>
      <SearchInput type="text" placeholder="Search" {...register("title")} />
      <FindButton type="submit">
        <Search />
      </FindButton>
    </StyledHeaderForm>
  );
};
