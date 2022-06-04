import styled from "styled-components";
import { typography } from "../../ui/typography";

export const FavContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  border-bottom: 1px solid rgb(231, 231, 231);
`;

export const InfoBlock = styled.div`
  display: grid;
  gap: 10px;

  margin-left: 20px;
  margin-right: auto;
`;

export const FavTitle = styled.h3`
  ${typography.H3}
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
  }

  path {
    stroke: rgb(252, 133, 127);
  }
`;
