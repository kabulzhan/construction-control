import { createUseStyles } from "react-jss";

export const useFormInputStyles = createUseStyles({
  input: (props) => {
    const genericStyles = {
      display: "block",
      width: "100%",
      height: "33px",
      border: "1px solid #a9a9a9",
      boxSizing: "border-box",
    };
    if (props.loginStyle) return { ...genericStyles, height: "44px" };
    return genericStyles;
  },
  label: (props) => ({
    fontSize: props.loginStyle ? "14px" : "12px",
    fontWeight: "normal",
    lineHeight: "16px",
    paddingLeft: "5px",
  }),
});

export const usetextAreaStyles = createUseStyles({
  textareaDiv: {
    // marginRight: "30%",
    width: "100%",
  },
  label: {
    paddingLeft: "5px",
    fontSize: "12px",
    display: "block",
  },
  textarea: {
    width: "100%",
    display: "block",
    boxSizing: "border-box",
  },
});

export const useSelectStyles = createUseStyles({
  select: {
    fontSize: "12px",
    width: "100%",
    "& select": {
      display: "block",
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "Roboto",
      height: "33px",
    },
  },
  label: {
    paddingLeft: "5px",
  },
});
