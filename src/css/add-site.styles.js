import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    maxWidth: "100%",
    width: "700px",
  },
  main: {
    padding: "0 4%",
    "& h5": {
      margin: "3% 0",
    },
  },
  title: {
    fontWeight: 400,
    margin: "0 0 2%",
  },
  addressAndStatus: {
    display: "grid",
    gridTemplateColumns: "5fr 4fr",
    gap: "0 5%",
    margin: "3% 0",
  },
  add: {
    textAlign: "right",
    margin: "2% 0 4%",
  },
  section: {
    "& textarea": {
      marginBottom: "3%",
    },
  },
  buttons: {
    margin: "3%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    fontSize: "12px",
  },
  delete: {
    display: "block",
    color: "#FF6262 !important",
    fontSize: "12px",
    marginBottom: "3%",
  },
});

export default useStyles;
