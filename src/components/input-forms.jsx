import React from "react";
import {
  useFormInputStyles,
  usetextAreaStyles,
  useSelectStyles,
} from "../css/input-forms.styles";

export const FormInput = ({ handleChange, label, ...otherProps }) => {
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

export const TextArea = ({ handleChange, label, height, ...otherProps }) => {
  const classes = usetextAreaStyles();
  return (
    <div className={classes.textareaDiv}>
      <div className={classes.label}>{label}</div>
      <textarea
        className={classes.textarea}
        onChange={handleChange}
        style={{ height }}
        {...otherProps}
      />
    </div>
  );
};

export const SelectForm = ({
  handleChange,
  options,
  defaultOption,
  label,
  ...otherProps
}) => {
  const classes = useSelectStyles();
  const labels = Object.keys(options);
  console.log(labels);
  return (
    <div className={classes.label}>
      {label}
      <select onChange={handleChange} {...otherProps}>
        {labels.map((label) => (
          <option value={label} selected={defaultOption === label}>
            {options[label]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormInput;
