import { useForm } from "react-hook-form";
import {
  BoxButton,
  BoxDescription,
  BoxTitle,
  StyledForm,
  StyledInfoBox,
  StyledInput,
} from "./styles";

type FormValues = {
  email: string;
};

export const InfoBox = () => {
  const { register } = useForm<FormValues>();
  return (
    <StyledInfoBox>
      <BoxTitle>Subscribe to Newsletter</BoxTitle>
      <BoxDescription>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </BoxDescription>
      <StyledForm>
        <StyledInput
          type="email"
          placeholder="Your email"
          {...register("email", {
            required: true,
          })}
        ></StyledInput>
        <BoxButton whileHover={{ scale: 1.05 }}>Subscribe</BoxButton>
      </StyledForm>
    </StyledInfoBox>
  );
};
