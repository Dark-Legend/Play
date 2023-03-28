import React, { useEffect, useState } from "react";
import Playicon from "../../assets/Icon/PlayIcon/Play-icon.png";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { sideBarData } from "./SidebarData";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import "./styles.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { signin } from "../../Router/route";

export default function Sidebar({ isActive, setIsActive }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate(signin);
  };

  return (
    <div
      className={`${styles.sidebarContainer}`}
      style={{ width: isActive ? "110px" : "250px" }}
    >
      {/* <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        // className={styles.sidebarContainer}
        sx={{
          backgroundColor: "#2a363f",
          width: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          height: "100vh",
          position: "fixed",
        }}
      > */}
      <div
        className={styles.logoArrow}
        style={{ justifyContent: isActive ? "center" : "space-between" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "#2a363f",
            padding: "0 10px",
          }}
        >
          <span className={styles.circle}>
            <img
              src={Playicon}
              height={40}
              // onClick={handleDrawerClose}
              style={{ cursor: "pointer" }}
              alt="playicon"
            />
          </span>
          <Typography
            sx={{
              display: isActive ? "none" : "block",
              transition: "display 0.4s ease-in-out",
            }}
            color={"white"}
            fontFamily={"Poppins"}
            fontSize={22}
          >
            Play
          </Typography>
        </div>

        <div
          style={{
            color: "white",
            width: "auto",
            cursor: "pointer",
          }}
          onClick={() => setIsActive(!isActive)}
        >
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </div>
      </div>
      <div className={styles.divider}></div>
      <ul className={styles.ulList}>
        {sideBarData.map((data, index) => (
          <>
            <NavLink
              to={data?.path}
              // classNameActive="active"
              style={{ width: isActive ? "60px" : "200px" }}
            >
              <li
                key={index}
                className={styles.listitem}
                onClick={() => navigate(data?.path)}
              >
                <span
                  style={{
                    // justifyContent: "center",
                    color: "white",
                  }}
                >
                  {data?.icon}
                </span>
                <p
                  style={{
                    display: isActive ? "none" : "block",
                    color: "white",
                  }}
                >
                  {data?.name}
                </p>
              </li>
            </NavLink>
          </>
        ))}
      </ul>
      <div className={styles.divider2}></div>
      <div className={styles.logout}>
        <Typography className={styles.logoutFont} onClick={handleLogout}>
          <LogoutIcon />
          Logout
        </Typography>
      </div>
      {/* </div> */}
      {/* </Drawer> */}
    </div>
  );
}
