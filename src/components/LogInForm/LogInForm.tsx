import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import {
  Button,
  Container,
  Input,
  Form,
  Lable,
  LogInBlock,
  PasswordInput,
  Tab,
  Tabs,
  Text,
  ErrorMassage,
  Notification,
} from "./styles";
import { useSelector } from "react-redux";
import { routes } from "../../routes/routes";
import {
  setPassword,
  setUser,
  setUserName,
} from "../../store/slices/userReducer";
import { RootState } from "../../store/store";
import { useAppDispatch } from "../../store/hooks/hooks";

export const LogInForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isSignInError, setIsSignInError] = useState(false);
  const [isSignUpError, setIsSignUpError] = useState(false);
  const [tab, setTab] = useState("login");
  const { isAuth } = useSelector(({ user }: RootState) => user);

  const onSubmit = (data: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        setTab("login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setIsSignUpError(true);
      });
  };

  const onSignIn = (data: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        navigate(routes.ACCOUNT);
        dispatch(setUser(userCredential.user.email));
        dispatch(setUserName(data.name));
        dispatch(setPassword(data.password));
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setIsSignInError(true);
      });
  };

  const handleTab = (tabId: string) => {
    setTab(tabId);
  };

  return (
    <Container>
      <LogInBlock>
        <Tabs>
          <Tab onClick={() => handleTab("login")} isActive={tab === "login"}>
            sign in
          </Tab>
          <Tab
            onClick={() => handleTab("registration")}
            isActive={tab === "registration"}
          >
            sign UP
          </Tab>
        </Tabs>

        {tab === "login" ? (
          <Form onSubmit={handleSubmit(onSignIn)}>
            {isAuth ? (
              ""
            ) : (
              <Notification>You need to register or login first.</Notification>
            )}
            <label>
              <Lable>Name</Lable>
              <Input
                type="text"
                placeholder="Your name"
                {...register("name")}
              />
            </label>
            <label>
              <Lable>Email</Lable>
              <Input placeholder="Your email" {...register("email")} />
            </label>
            <label>
              <Lable>Password</Lable>
              <PasswordInput
                type="password"
                placeholder="Your password"
                {...register("password")}
              />
            </label>
            <Text>Forgot password ?</Text>
            {isSignInError ? (
              <ErrorMassage>
                Incorrect email or password. Enter your sign in information
                again, or register.
              </ErrorMassage>
            ) : (
              ""
            )}
            <Button type="submit">sign in</Button>
          </Form>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <Lable>Name</Lable>
              <Input
                type="text"
                placeholder="Your name"
                {...register("name")}
              />
            </label>
            <label>
              <Lable>Email</Lable>
              <Input
                type="email"
                placeholder="Your email"
                {...register("email")}
              />
            </label>
            <label>
              <Lable>Password</Lable>
              <Input
                type="password"
                placeholder="Your password"
                {...register("password")}
              />
            </label>
            {isSignUpError ? (
              <ErrorMassage>
                Some of the fields are not filled, please try again.
              </ErrorMassage>
            ) : (
              ""
            )}
            <Button type="submit">sign UP</Button>
          </Form>
        )}
      </LogInBlock>
    </Container>
  );
};
