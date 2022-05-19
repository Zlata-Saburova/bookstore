import styled from "styled-components";
import { typography } from "../../ui/typography";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 72px;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;

  max-width: 544px;
  width: 100%;

  background-color: rgb(241, 218, 196);
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

  ${typography.button}
  background-color: rgb(13, 12, 29);
  color: rgb(255, 255, 255);
  text-transform: uppercase;

  cursor: pointer;
`;

export const TabsContainer = styled.div`
  border-bottom: 1px solid rgb(231, 231, 231);
`;

export const Tab = styled.button`
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;

  ${typography.tab}

  border-bottom: 1px solid rgb(13, 12, 29);

  cursor: pointer;
`;

export const TabInfo = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
`;
