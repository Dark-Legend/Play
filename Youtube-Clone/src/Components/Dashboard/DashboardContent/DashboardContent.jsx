import React from "react";
// import { Redirect, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../../Router/PrivateRoute/PrivateRoute";
import { home, trending } from "../../../Router/route";
import Home from "../../../screens/Home/Home";
import Trending from "../../../screens/Trending/Trending";
import Dashboard from "../Dashboard";
import { Switch } from "react-router-dom";

const DashboardContent = () => {
  return (
    <>
      {/* <Route exact path={home} component={Home} />
      <Route exact path={trending} component={Trending} /> */}
    </>
  );
};

export default DashboardContent;
