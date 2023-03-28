import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetHomeVideo } from "../../assets/API/Home/query";
import Container from "../../Components/Container/Container";
import Loader from "../../Components/Loader/Loader";
import Sidebar from "../../Components/SideBar/Sidebar";
import VideoCard from "../../Components/VideoCard/VideoCard";
import { videoPlayer } from "../../Router/route";
import "./styles.scss";

const Home = () => {
  const { data: videoData, isLoading: contentLoading } = useGetHomeVideo();
  const navigate = useNavigate();

  console.log(videoData?.items, "CHANNEL");
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#2a363f",
        height: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {contentLoading ? (
        <Loader />
      ) : (
        <Box
          component="main"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
            overflowY: "auto",
            padding: "0 0 80px 45px",
          }}
        >
          {videoData?.items?.map((val) => (
            <VideoCard
              id={val?.id}
              title={val?.snippet?.title}
              thumbnails={
                val?.snippet?.thumbnails?.maxres ||
                val?.snippet?.thumbnails?.default ||
                val?.snippet?.thumbnails?.high ||
                val?.snippet?.thumbnails?.medium ||
                val?.snippet?.thumbnails?.standard
              }
              channel={val?.snippet?.channelTitle}
              viewcount={val?.statistics?.viewCount}
              publishdate={val?.snippet?.publishedAt}
              channeltitle={val?.snippet?.channelTitle}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Home;
