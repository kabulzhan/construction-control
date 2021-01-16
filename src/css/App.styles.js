import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    body: {
      margin: 0,
      "font-family":
        '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      "background-color": "#302d42",
    },
    a: {
      color: "#6b8cff",
    },
    "a:visited": {
      color: "#6b8cff",
    },
    code: {
      "font-family":
        'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    },
  },

  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "768px",
    margin: "auto",
    backgroundColor: "white",
  },
  "@media (max-width: 768px)": {
    container: {
      width: "95vw",
    },
  },
});

export default useStyles;
