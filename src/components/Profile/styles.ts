import styled from "styled-components";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const Subtitle = styled.h3`
  margin-bottom: 16px;

  ${typography.H3}
`;

export const Input = styled.input`
  width: 544px;
  padding-left: 20px;
  padding-top: 11px;
  padding-bottom: 11px;
  margin-bottom: 40px;

  ${typography.input}
  border: 1px solid rgb(231, 231, 231);
  color: rgb(0, 0, 0);

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
  }

  ${media.MD} {
    width: 100%;
  }
`;

export const Lable = styled.p`
  margin-bottom: 10px;

  ${typography.body}

  cursor: pointer;
`;

export const Form = styled.form`
  margin-bottom: 40px;
`;

export const Buttom = styled.button`
  display: block;
  max-width: 480px;
  width: 100%;
  margin-left: auto;
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

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  border-bottom: 1px solid rgb(231, 231, 231);

  ${media.MD} {
    display: block;
  }
`;

export const ErrorMassage = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
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
