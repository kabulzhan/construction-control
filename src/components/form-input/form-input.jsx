import React from "react";
import { useFormInputStyles } from "../../css/form-input.styles";

const LoginInput = ({ handleChange, label, ...otherProps }) => {
  const classes = useFormInputStyles(otherProps);
  return (
    <div>
      <label className={classes.label}>{label}</label>
      <input
        className={classes.input}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default LoginInput;
