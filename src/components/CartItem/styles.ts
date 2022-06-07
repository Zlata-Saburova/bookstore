import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { typography } from "../../ui/typography";

export const CartContainer = styled(motion.div)`
  display: flex;
  align-items: center;

  max-width: 700px;
  width: 100%;
  margin: 0 auto;

  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 5px solid rgb(166, 156, 172);
  border-radius: 20px;

  cursor: pointer;

  @media (max-width: 600px) {
    position: relative;
    display: block;

    max-width: 350px;
  }
`;

export const CartTitle = styled.h3`
  ${typography.H3}

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const CartSubTitle = styled.p`
  margin-bottom: 30px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 100px;
  width: 100%;

  @media (max-width: 600px) {
    margin-left: 100px;
    margin-right: 100px;
  }
`;

export const Btn = styled.button`
  width: 24px;
  height: 24px;

  cursor: pointer;

  &:hover {
    path {
      fill: rgb(71, 73, 115);
    }
  }
`;

export const BtnClose = styled.button`
  width: 24px;
  height: 24px;

  cursor: pointer;

  &:hover {
    path {
      fill: rgb(71, 73, 115);
    }
  }

  @media (max-width: 600px) {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(0, 0, 0);
`;

export const Count = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
`;

export const Price = styled.p`
  margin-right: 50px;

  font-weight: 700;
  font-size: 35px;
  line-height: 60px;
`;

export const InfoBlock = styled.div`
  display: grid;
  gap: 10px;

  margin-left: 20px;
  margin-right: 100px;
`;
