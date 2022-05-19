import styled from "styled-components";
import { typography } from "../../ui/typography";
import { motion } from "framer-motion";

const StyledListItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 5px solid rgb(166, 156, 172);
  border-radius: 20px;

  padding: 0 16px;

  cursor: pointer;
`;

const StyledBookTitle = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  height: 64px;

  ${typography.H3}
`;

const StyledBookSubtitle = styled.p`
  margin-top: auto;
  margin-bottom: 40px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgb(168, 168, 168);
`;

const StyledPrice = styled.h3`
  margin-bottom: 10px;

  ${typography.H3}
`;

export { StyledListItem, StyledBookTitle, StyledBookSubtitle, StyledPrice };
