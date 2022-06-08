import styled from "styled-components";
import { typography } from "../../ui/typography";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { media } from "../../ui/media";

const StyledListItem = styled(motion.li)`
  display: flex;
  flex-direction: column;

  padding: 0 16px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 5px solid rgb(166, 156, 172);
  border-radius: 20px;

  cursor: pointer;

  transition: all 0.3s;

  ${media.MD} {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Img = styled.img`
  display: block;

  width: 300px;
  margin: 0 auto;

  ${media.MD} {
    width: 250px;
  }
`;

const BookTitle = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  height: 64px;

  ${typography.H3}
`;

const BookSubtitle = styled.p`
  margin-top: auto;
  margin-bottom: 40px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgb(168, 168, 168);
`;

const Price = styled.h3`
  margin-bottom: 10px;

  ${typography.H3}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export { StyledListItem, BookTitle, BookSubtitle, Price, StyledLink, Img };
