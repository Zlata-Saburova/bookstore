import styled from "styled-components";
import { typography } from "../../ui/typography";

export const CartContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  border-bottom: 1px solid rgb(231, 231, 231);
`;

export const CartTitle = styled.h3`
  ${typography.H3}
`;

export const CartSubTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
`;

export const Btn = styled.button`
  cursor: pointer;
`;
