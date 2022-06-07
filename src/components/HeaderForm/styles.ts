import { Link } from "react-router-dom";
import styled from "styled-components";
import { typography } from "../../ui/typography";

export const StyledHeaderForm = styled.form`
  position: relative;

  max-width: 542px;
  width: 100%;
  margin-left: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  max-width: 542px;
  width: 100%;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 20px;

  ${typography.input}

  border: 1px solid rgb(231, 231, 231);
`;

export const FindButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;

  max-width: 24px;
  width: 100%;
  height: 24px;

  cursor: pointer;
`;

export const ResultsBlock = styled.ul`
  position: absolute;
  top: 100%;
  z-index: 3;

  width: 100%;
  border: 1px solid rgb(231, 231, 231);
  background-color: white;
`;

export const Container = styled.div`
  position: relative;
  height: 400px;
  overflow: auto;

  padding-bottom: 59px;
`;

export const ResultLI = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;

  height: 100px;
  width: 100%;

  border-bottom: 1px solid rgb(231, 231, 231);

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgb(166, 156, 172);
  }

  &:active {
    background-color: rgb(71, 73, 115);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const ResultTitle = styled.p`
  ${typography.body}
`;

export const Img = styled.img`
  height: 90px;
  margin-right: 20px;
`;

export const ResultButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 17px;
  padding-bottom: 17px;
  z-index: 2;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  border-top: 1px solid rgb(231, 231, 231);
  background-color: white;
`;
