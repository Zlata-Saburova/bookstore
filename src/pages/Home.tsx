import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/bookstore/new">Watch new books</Link>
    </>
  );
};
