import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelectors";
import { setUser, setUserName } from "../../store/slices/userReducer";
import {
  Buttom,
  FormContainer,
  Form,
  Input,
  Lable,
  Subtitle,
  Notification,
} from "./styles";

export const Profile = () => {
  const { register, handleSubmit } = useForm();
  const { name, email } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const [isChange, setIsChange] = useState(false);

  const onSubmit = (data: any) => {
    dispatch(setUserName(data.name));
    dispatch(setUser(data.email));
    setIsChange(true);
  };

  return (
    <>
      <Subtitle>Profile</Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <label>
            <Lable>Name</Lable>
            <Input type="text" placeholder={name} {...register("name")} />
          </label>
          <label>
            <Lable>Email</Lable>
            <Input placeholder={email} type="email" {...register("email")} />
          </label>
        </FormContainer>
        <Buttom type="submit">Save changes</Buttom>
      </Form>
      {isChange ? <Notification>Changes saved</Notification> : ""}
    </>
  );
};
