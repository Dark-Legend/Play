import { Box, Typography } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useGetHomeVideo } from "../../assets/API/Home/query";
import { videoPlayer } from "../../Router/route";
import Container from "../Container/Container";
import Sidebar from "../SideBar/Sidebar";
import "./styles.scss";

const VideoCard = ({
  title,
  thumbnails,
  channeltitle,
  viewcount,
  publishdate,
  sx,
  id,
}) => {
  // const { data: videoData } = useGetHomeVideo();
  const navigate = useNavigate();
  const handleFormatViews = (numViews) => {
    if (numViews >= 1000000) {
      return (numViews / 1000000).toFixed(1) + "m";
    } else if (numViews >= 100000) {
      return (numViews / 1000).toFixed(1) + "k";
    } else {
      return numViews.toString();
    }
  };

  console.log(
    channeltitle,

    "VIDEOS"
  );

  const handlePublishTime = (time) => {
    const date = moment(time).endOf("day").fromNow();
    return date;
  };
  return (
    <Box sx={{ display: "flex", backgroundColor: "#2a363f" }}>
      {/* <Sidebar /> */}
      <Box
        component="main"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "25px",
          flexWrap: "wrap",
          // overflow: "hidden",
          ...sx,
        }}
      >
        {/* {data?.data?.items.map((data, index) => ( */}
        <div
          className="videoCard-container"
          onClick={() => navigate(`/home/video/${id}`)}
        >
          <div className="videoLogo-container">
            <img src={thumbnails?.url} alt="" className="logo-image" />
          </div>
          <div className="video-info">
            <Typography color={"white"} fontWeight={600} fontFamily={"Poppins"}>
              {title}
            </Typography>
            <Typography color={"#9BA7A5"}>{channeltitle}</Typography>
            <div className="view-time">
              {viewcount && (
                <Typography color={"#9BA7A5"}>
                  {handleFormatViews(viewcount)} views
                </Typography>
              )}

              <Typography color={"#9BA7A5"}>
                {handlePublishTime(publishdate)}
              </Typography>
            </div>
          </div>
        </div>
        {/* ))} */}
      </Box>
    </Box>
  );
};

export default VideoCard;
