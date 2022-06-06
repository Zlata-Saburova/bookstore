import { motion } from "framer-motion";
import styled from "styled-components";
import { typography } from "../../ui/typography";

export const CustomSlide = styled(motion.div)`
  display: block;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: 40px;
  padding: 0 20px;

  cursor: pointer;
`;
export const SlideContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;

  border: 5px solid rgb(166, 156, 172);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
`;

export const SliderTitle = styled.h3`
  margin-bottom: 100px;

  ${typography.H3}
  color: rgb(71, 73, 115);

  @media (max-width: 500px) {
    margin-bottom: 30px;

    font-weight: 500;
    font-size: 22px;
    line-height: 30px;
  }
`;

export const SliderPrice = styled.h3`
  ${typography.H3}
  color: rgb(22, 27, 51);

  @media (max-width: 500px) {
    font-weight: 500;
    font-size: 22px;
    line-height: 30px;
  }
`;

export const LastSlideText = styled(SliderTitle)`
  text-align: center;
`;

export const LastSlideContainer = styled(SlideContainer)`
  height: 350px;

  @media (max-width: 500px) {
    height: 243px;
  }
`;

export const Img = styled.img`
  width: 300px;

  @media (max-width: 500px) {
    width: 200px;
  }
`;
