import React from "react";
import { useLocation, useParams } from "react-router-dom";

const VideoPage = () => {
  const location = useLocation();
  const param = useParams();
  console.log(param, "ID");
  return <div>VideoPage</div>;
};

export default VideoPage;
