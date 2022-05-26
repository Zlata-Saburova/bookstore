import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
} from "./styles";

export const LogInForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  const [active, setActive] = useState("login");

  const handleTab = (activeId: string) => {
    setActive(activeId);
  };

  console.log(active);

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
          <Form onSubmit={onSubmit}>
            <label>
              <Lable>Email</Lable>
              <Input placeholder="Your email" {...register("email")} />
            </label>
            <label>
              <Lable>Password</Lable>
              <PasswordInput
                placeholder="Your password"
                {...register("password")}
              />
            </label>
            <Text>Forgot password ?</Text>
            <Button type="submit">sign in</Button>
          </Form>
        ) : (
          <Form>
            <label>
              <Lable>Name</Lable>
              <Input placeholder="Your name" />
            </label>
            <label>
              <Lable>Email</Lable>
              <Input placeholder="Your email" />
            </label>
            <label>
              <Lable>Password</Lable>
              <Input placeholder="Your password" />
            </label>
            <label>
              <Lable>Confirm password</Lable>
              <LastInput placeholder="Confirm password" />
            </label>
            <Button type="submit">sign UP</Button>
          </Form>
        )}
      </LogInBlock>
    </Container>
  );
};
