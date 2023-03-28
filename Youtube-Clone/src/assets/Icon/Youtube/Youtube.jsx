import React from "react";
import YoutubeIcon from "assets/Icon/Youtube/youtube.png";

const Youtube = ({ width, height }) => {
  return <img src={YoutubeIcon} height={height} width={width} />;
};

// Youtube.propTypes = {
//   width: PropTypes.string,
//   height: PropTypes.string,
// };

// Youtube.default = {
//   width: "50px",
//   height: "50px",
// };

export default Youtube;
