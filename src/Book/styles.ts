import styled from "styled-components";

interface iProps {
  visable: boolean;
}

export const StyledBook = styled.div`
  display: flex;
  justify-content: space-between;
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
  padding-top: 41px;

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

export const PropertyList = styled.ul<iProps>`
  height: 140px;
  overflow: ${({ visable }) => (visable ? "visable" : "hidden")};

  margin-bottom: 20px;
`;

export const StyledLI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  cursor: pointer;
`;
