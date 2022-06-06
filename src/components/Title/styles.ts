import styled from "styled-components";
import { typography } from "../../ui/typography";
import { media } from "../../ui/media";

export const StyledTitle = styled.h1`
  margin-bottom: 48px;
  text-align: left;

  ${typography.H1};

  ${media.SM} {
    margin-bottom: 36px;

    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
  }
`;
