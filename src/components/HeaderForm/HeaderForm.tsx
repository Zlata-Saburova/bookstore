import { FindButton, SearchInput, StyledHeaderForm } from "./styles";
import { useForm } from "react-hook-form";
import { Search } from "../../assets/icons";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

export const HeaderForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data.title);
  };

  return (
    <StyledHeaderForm onSubmit={handleSubmit(onSubmit)}>
      <SearchInput type="text" placeholder="Search" {...register("title")} />
      <Link to={routes.SEARCH}>
        <FindButton type="submit">
          <Search />
        </FindButton>
      </Link>
    </StyledHeaderForm>
  );
};
