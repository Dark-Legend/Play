import { Typography } from "@mui/material";
import React from "react";
import "./styles.scss";

const Input = ({
  value,
  label,
  onChange,
  type,
  sx,
  className,
  placeholder,
  style,
}) => {
  return (
    <div className="input-container">
      {label && (
        <Typography className="inputLabel" sx={{ ...sx }}>
          {label}
        </Typography>
      )}
      <input
        className={`${className} input`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ ...style }}
      />
    </div>
  );
};

export default Input;
