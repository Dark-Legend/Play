import React from "react";
import { Navigate, Redirect, Route } from "react-router-dom";
// import { Navigate, Redirect, Route } from "react-router-dom";
import { dashboard, signin } from "../route";

const UnprotectedRoutes = ({ children }) => {
  const token = localStorage.getItem("auth");
  return token ? <Navigate to={dashboard} /> : <>{children}</>;
};

export default UnprotectedRoutes;
