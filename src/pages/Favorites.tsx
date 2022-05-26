import React from "react";
import { Navigate } from "react-router-dom";
import { routes } from "../routes/routes";

export const Favorites = () => {
  const isAuth = false;

  if (isAuth) {
    return <div>Favorites</div>;
  }

  return <Navigate to={routes.SIGN_IN} />;
};
