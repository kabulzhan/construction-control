import { createUseStyles } from "react-jss";

export const useButtonStyles = createUseStyles({
  button: (props) => {
    let genericStyles = {
      color: "white",
      border: "none",
      cursor: "pointer",
      width: "165px",
      height: "28px",
      backgroundColor: "#6B8CFF",
      borderRadius: "55px",
    };
    if (props.loginButton) {
      return {
        ...genericStyles,
        width: "100%",
        backgroundColor: "#1AA839",
        height: "44px",
        borderRadius: 0,
      };
    }
    if (props.submit) {
      return {
        ...genericStyles,
        backgroundColor: "#1AA839",
      };
    }
    return genericStyles;
  },
});
