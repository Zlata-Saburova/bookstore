import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { typography } from "../../ui/typography";

export const FavContainer = styled(motion.div)`
  display: flex;
  align-items: center;

  max-width: 750px;
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

export const InfoBlock = styled.div`
  display: grid;
  gap: 10px;

  margin-left: 20px;
  margin-right: auto;
`;

export const FavTitle = styled.h3`
  ${typography.H3}

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const FavSubTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const LikeBtn = styled.button`
  margin-right: 10px;

  cursor: pointer;

  path {
    fill: rgb(252, 133, 127);
    stroke: rgb(252, 133, 127);
  }

  transition: all 0.3s;

  &:hover {
    path {
      fill: rgb(242 80 72);
      stroke: rgb(242 80 72);
    }
  }

  &:active {
    path {
      fill: none;
    }
  }

  @media (max-width: 600px) {
    position: absolute;
    top: 10px;
    right: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(0, 0, 0);
`;

export const Img = styled.img`
  width: 200px;

  @media (max-width: 600px) {
    display: block;

    max-width: 300px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const CartBtn = styled.button`
  max-width: 200px;
  width: 100%;

  padding: 8px 15px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgb(255, 255, 255);

  background-color: rgb(71, 73, 115);

  transition: all 0.5s;

  &:hover {
    background-color: rgb(22, 27, 51);
  }

  &:active {
    background-color: rgb(71, 73, 115);
  }

  @media (max-width: 600px) {
    max-width: 300px;
  }
`;
