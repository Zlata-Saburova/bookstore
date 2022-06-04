import styled from "styled-components";
import { typography } from "../../ui/typography";

interface IProps {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 72px;
`;

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  max-width: 544px;
  width: 100%;

  background-color: rgb(241, 218, 196);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const LikeContainer = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 56px;
  width: 100%;
  height: 56px;

  background-color: rgb(13, 12, 29);

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    path {
      stroke: rgb(252, 133, 127);
    }
  }

  &:active {
    path {
      fill: rgb(252, 133, 127);
    }
  }
`;

export const InfoContainer = styled.div`
  max-width: 448px;
  width: 100%;
  padding-top: 40px;

  border-top: 1px solid rgb(231, 231, 231);
`;

export const BookPrice = styled.p`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: rgb(13, 12, 29);
`;

export const RateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 30px;
`;

export const PropertyList = styled.ul`
  height: 140px;
  overflow: hidden;

  margin-bottom: 20px;
`;

export const StyledLI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 10px;
`;

export const PropertyTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  text-transform: capitalize;
  color: rgb(168, 168, 168);
`;

export const Property = styled.p`
  max-width: 207px;
  width: 100%;
  word-wrap: break-word;

  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: rgb(13, 12, 29);
`;

export const Button = styled.button`
  margin-bottom: 40px;
  margin-right: 8px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  cursor: pointer;
`;

export const InfoDetails = styled.ul`
  padding-top: 20px;
  padding-left: 10px;

  border-top: 1px solid rgb(231, 231, 231);
`;

export const DetailsLI = styled(StyledLI)`
  justify-content: left;
`;

export const DetailsTitle = styled(PropertyTitle)`
  margin-right: 50px;
  max-width: 70px;
  width: 100%;
`;

export const CartButton = styled.button`
  display: block;

  padding: 16px 140px;
  margin-bottom: 40px;

  ${typography.button}
  background-color: rgb(13, 12, 29);
  color: rgb(255, 255, 255);
  text-transform: uppercase;

  cursor: pointer;
`;

export const TabsContainer = styled.div`
  border-bottom: 1px solid rgb(231, 231, 231);
`;

export const Tab = styled.button<IProps>`
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;

  ${typography.tab}

  border-bottom: ${({ isActive }) =>
    isActive ? "1px solid rgb(13, 12, 29)" : ""};

  cursor: pointer;
`;

export const TabInfo = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
  height: 60px;
`;

export const SocialsLink = styled.div`
  display: flex;
  text-align: center;
  justify-content: left;

  margin-bottom: 72px;
`;

export const Social = styled.div`
  max-width: 24px;
  width: 100%;
  height: 24px;
  margin-right: 24px;

  cursor: pointer;
`;

export const Preview = styled.a`
  display: flex;
  justify-content: center;

  ${typography.link}
`;
