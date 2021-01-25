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
      genericStyles.width = "100%";
      genericStyles.backgroundColor = "#1AA839";
      genericStyles.height = "44px";
      genericStyles.borderRadius = 0;
    }
    if (props.submit) {
      genericStyles.backgroundColor = "#1AA839";
    }
    if (props.disabled) {
      genericStyles.backgroundColor = "grey";
    }
    return genericStyles;
  },
});
