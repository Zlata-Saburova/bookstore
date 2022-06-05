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
  LastInput,
  ErrorMassage,
  Notification,
} from "./styles";
import { useSelector } from "react-redux";
import { routes } from "../../routes/routes";
import { setUser, setUserName } from "../../store/slices/userReducer";
import { RootState } from "../../store/store";
import { useAppDispatch } from "../../store/hooks/hooks";

export const LogInForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isSignInError, setIsSignInError] = useState(false);
  const [isSignUpError, setIsSignUpError] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { isAuth } = useSelector(({ user }: RootState) => user);

  const onSubmit = (data: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        setIsSignUp(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setIsSignUpError(true);
      });
    navigate(routes.SIGN_IN);
  };

  const onSignIn = (data: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate(routes.ACCOUNT);
        dispatch(setUser(userCredential.user.email));
        dispatch(setUserName(data.name));
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setIsSignInError(true);
      });
  };

  const [active, setActive] = useState("login");

  const handleTab = (activeId: string) => {
    setActive(activeId);
  };

  return (
    <Container>
      <LogInBlock>
        <Tabs>
          <Tab onClick={() => handleTab("login")} isActive={active === "login"}>
            sign in
          </Tab>
          <Tab
            onClick={() => handleTab("registration")}
            isActive={active === "registration"}
          >
            sign UP
          </Tab>
        </Tabs>

        {active === "login" ? (
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
            <label>
              <Lable>Confirm password</Lable>
              <LastInput
                type="password"
                placeholder="Confirm password"
                {...register("ConfirmPassword")}
              />
            </label>
            {isSignUp ? (
              <Notification>
                You have successfully registered, now go to the sign in tab and
                enter your details.
              </Notification>
            ) : (
              ""
            )}
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
