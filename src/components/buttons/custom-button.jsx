import React from "react";
import { useButtonStyles } from "../../css/custom-button.styles";

const CustomButton = ({ children, handleClick, disabled, ...otherProps }) => {
  const classes = useButtonStyles({ ...otherProps, disabled });
  if (handleClick) {
    return (
      <button
        className={classes.button}
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  return (
    <button className={classes.button} disabled={disabled}>
      {children}
    </button>
  );
};

export default CustomButton;
