import React from "react";
import { useButtonStyles } from "../../css/custom-button.styles";

const CustomButton = ({ children, handleClick, ...otherProps }) => {
  const classes = useButtonStyles(otherProps);
  return (
    <button className={classes.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
