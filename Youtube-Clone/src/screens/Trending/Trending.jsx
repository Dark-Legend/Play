import { Box } from "@mui/material";
import React from "react";
import { useGetSearchedVideos } from "../../assets/API/Search/queries";
import Loader from "../../Components/Loader/Loader";
import VideoCard from "../../Components/VideoCard/VideoCard";

const Trending = () => {
  const { data: videoData, isLoading: contentLoading } =
    useGetSearchedVideos("trending");
  console.log(videoData, "RESULT2");
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
            overflow: "scroll",
            padding: "0 0 100px 45px",
          }}
        >
          {videoData?.items?.map((val, i) => (
            <VideoCard
              key={i}
              title={val?.snippet?.title}
              thumbnails={
                val?.snippet?.thumbnails?.high ||
                val?.snippet?.thumbnails?.medium ||
                val?.snippet?.thumbnails?.default
              }
              channel={val?.snippet?.channelTitle}
              publishdate={val?.snippet?.publishedAt}
              channeltitle={val?.snippet?.channelTitle}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Trending;
