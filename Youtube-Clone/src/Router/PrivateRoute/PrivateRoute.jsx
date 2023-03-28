import React from "react";
import { Navigate } from "react-router-dom";
import { signin } from "../route";

const PrivateRoute = ({ children }) => {
  //   const { Component } = props;
  const authToken = localStorage.getItem("auth");
  //   useEffect(() => {

  //     if (!authToken.length) {
  //       navigate("/signin");
  //     }
  //   });
  return authToken ? <>{children}</> : <Navigate to={signin} />;
};

export default PrivateRoute;
