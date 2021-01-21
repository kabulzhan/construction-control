import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    maxWidth: "100%",
    width: "700px",
    height: "auto",
    fontSize: "12px",
  },
  main: {
    margin: "2%",
    "& input, select": {
      marginBottom: "3%",
    },
    "& h5": {
      fontSize: "12px",
      paddingLeft: "5px",
      fontWeight: "400",
      marginBottom: "0",
    },
  },
  description: {
    margin: "3% 0",
  },
  title: {
    fontWeight: "400",
    margin: "0 0 3%",
  },
  planImage: {
    width: "100%",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    margin: "0 25%",
  },
});

export default useStyles;
