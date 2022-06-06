import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelectors";
import {
  setPassword,
  setUser,
  setUserName,
} from "../../store/slices/userReducer";
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
  const { name, email, password } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const [isChange, setIsChange] = useState(false);

  const onSubmit = (data: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch(setUserName(data.name));
        dispatch(setUser(data.email));
        dispatch(setPassword(data.password));
        setIsChange(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Subtitle>Profile</Subtitle>
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
        <Subtitle>Password</Subtitle>
        <FormContainer>
          <label>
            <Lable>Password</Lable>
            <Input
              type="pasword"
              placeholder={password}
              {...register("password")}
            />
          </label>
          <label>
            <Lable>New password</Lable>
            <Input
              type="password"
              placeholder="New password"
              {...register("newPassword")}
            />
          </label>
        </FormContainer>
        <Buttom type="submit">Save changes</Buttom>
      </Form>
      {isChange ? <Notification>Changes saved</Notification> : ""}
    </>
  );
};
