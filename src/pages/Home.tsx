import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BookSlider } from "../components/BookSlider/BookSlider";
import { InfoBox } from "../components/InfoBox/InfoBox";
import { Title } from "../components/Title/Title";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
  };
  return (
    <>
      <Title>Don't miss our new books</Title>
      <NewLink to="/bookstore/new">
        <BookSlider settings={settings} />
      </NewLink>
      <InfoBox />
    </>
  );
};

const NewLink = styled(Link)`
  text-decoration: none;
`;
