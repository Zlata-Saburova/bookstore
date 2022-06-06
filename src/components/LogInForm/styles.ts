import styled from "styled-components";
import { typography } from "../../ui/typography";

interface IProps {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogInBlock = styled.div`
  max-width: 544px;
  width: 100%;
  border: 1px solid rgb(231, 231, 231);
`;

export const Form = styled.form`
  padding: 40px 32px;

  border-top: 1px solid rgb(231, 231, 231);
`;

export const Input = styled.input`
  max-width: 480px;
  width: 100%;
  padding-left: 20px;
  padding-top: 11px;
  padding-bottom: 11px;
  margin-bottom: 20px;

  ${typography.input}
  border: 1px solid rgb(231, 231, 231);
  color: rgb(0, 0, 0);

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
  }
`;

export const Lable = styled.p`
  margin-bottom: 10px;

  ${typography.body}

  cursor: pointer;
`;

export const PasswordInput = styled(Input)`
  margin-bottom: 8px;
`;

export const Button = styled.button`
  max-width: 480px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;

  ${typography.button}
  color: rgb(255, 255, 255);
  text-transform: uppercase;

  background-color: rgb(13, 12, 29);

  transition: all 0.3s;

  &:hover {
    font-size: 26px;
  }
  &:active {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;

  margin-bottom: 40px;

  cursor: pointer;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Tab = styled.div<IProps>`
  width: 239px;
  padding-top: 24px;
  padding-bottom: ${({ isActive }) => (isActive ? "23px" : "24px")};

  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: rgb(168, 168, 168);
  text-transform: uppercase;
  text-align: center;

  border-bottom: ${({ isActive }) =>
    isActive ? "1px solid rgb(13, 12, 29)" : ""};

  cursor: pointer;
`;

export const LastInput = styled(Input)`
  margin-bottom: 40px;
`;

export const ErrorMassage = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 40px;
  text-align: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: rgb(255, 0, 0);

  background-color: rgb(241, 218, 196);
`;

export const Notification = styled(ErrorMassage)`
  color: rgb(0, 0, 0);
`;
