import React from "react";
import "./styles.scss";

const Button = ({ className, sx, children }) => {
  return (
    <div style={{ width: "100%" }}>
      <button className={`btn ${className}`} sx={{ ...sx }}>
        {children}
      </button>
    </div>
  );
};

export default Button;
