import { Link } from "react-router-dom";
import styled from "styled-components";
import { BookSlider } from "../components/BookSlider/BookSlider";
import { InfoBox } from "../components/InfoBox/InfoBox";
import { Title } from "../components/Title/Title";

export const Home = () => {
  return (
    <>
      <Title>Don't miss our new books</Title>
      <NewLink to="/bookstore/new">
        <BookSlider />
      </NewLink>
      <InfoBox />
    </>
  );
};

const NewLink = styled(Link)`
  text-decoration: none;
`;
