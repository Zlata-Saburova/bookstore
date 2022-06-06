import { motion } from "framer-motion";
import styled from "styled-components";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const StyledInfoBox = styled.div`
  padding: 56px 64px;
  margin-top: 72px;

  background-color: rgb(241, 218, 196);
`;

export const BoxTitle = styled.h3`
  margin-bottom: 32px;

  ${typography.H3}
  color: rgb(13, 12, 29);
`;

export const BoxDescription = styled.p`
  margin-bottom: 32px;

  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: rgb(168, 168, 168);
`;

export const StyledForm = styled.form`
  display: flex;

  max-width: 992px;
  width: 100%;

  ${media.SM} {
    display: block;
  }
`;

export const StyledInput = styled.input`
  max-width: 845px;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;

  background-color: rgb(255, 255, 255);

  ${typography.input}

  ${media.SM} {
    margin-bottom: 24px;
  }
`;

export const BoxButton = styled(motion.button)`
  padding: 16px 40px;

  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: rgb(255, 255, 255);

  background-color: rgb(13, 12, 29);

  cursor: pointer;

  ${media.SM} {
    width: 100%;
  }
`;
