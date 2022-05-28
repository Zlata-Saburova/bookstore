import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 30px;

  border-top: 1px solid rgb(231, 231, 231);
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 67px;
  width: 100%;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: rgb(168, 168, 168);
`;

export const Pages = styled.div`
  display: flex;
`;

export const Page = styled.button`
  width: 30px;
  height: 30px;
  padding: 3px;
  margin-left: 5px;
  margin-right: 5px;

  border: 1px solid rgb(231, 231, 231);
  cursor: pointer;
`;

export const CurrentPage = styled(Page)`
  border: 1px solid rgb(13, 12, 29);
`;
