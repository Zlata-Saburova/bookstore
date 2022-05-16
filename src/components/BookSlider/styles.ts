import { motion } from "framer-motion";
import styled from "styled-components";
import { typography } from "../../ui/typography";

export const CustomSlide = styled(motion.div)`
  max-width: 800px;
  width: 100%;
  margin-left: 160px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 0 20px;

  background-color: rgb(166, 156, 172);

  cursor: pointer;
`;
export const SlideContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SliderTitle = styled.h3`
  margin-bottom: 100px;

  ${typography.H3}
  color: rgb(71, 73, 115);
`;

export const SliderPrice = styled.h3`
  ${typography.H3}
  color: rgb(22, 27, 51);
`;

export const LastSlideText = styled(SliderTitle)`
  text-align: center;
`;

export const LastSlideContainer = styled(SlideContainer)`
  height: 350px;
`;
