import React, { useEffect, useState } from "react";
import { Outlet, Route } from "react-router-dom";
import Login from "../../screens/AuthPages/SignIn/Login";
import SignUp from "../../screens/AuthPages/SignUp/SignUp";
import Home from "../../screens/Home/Home";
import Trending from "../../screens/Trending/Trending";
import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";
import DashboardContent from "./DashboardContent/DashboardContent";
import styles from "./styles.module.scss";

const Dashboard = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      <div
        className={styles.wrapper}
        style={{
          marginLeft: isActive ? "110px" : "250px",
          transition: "margin-left 0.4s ease-in-out",
        }}
      >
        <Header />
        <div className={styles.mainContent}>
          {/* <Home />
          <Trending /> */}
          {/* <DashboardContent /> */}
          <Outlet />
          {/* <Route path="/signup" component={SignUp} /> */}
          {/* <Login /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
