import { createUseStyles } from "react-jss";

export const useFormInputStyles = createUseStyles({
  input: (props) => {
    const genericStyles = {
      display: "block",
      width: "100%",
      height: "33px",
      border: "1px solid #a9a9a9",
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
