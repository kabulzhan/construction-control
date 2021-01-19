import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    padding: "3%",
    fontSize: "12px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 3%",

    "& h2": {
      fontWeight: 400,
      margin: 0,
    },
  },
  menu: {
    margin: "3% 2%",
    "& span": {
      marginRight: "6%",
      padding: "1.1% 1.2%",
      cursor: "pointer",
    },
  },
  completed: {
    backgroundColor: "#ebebeb",
  },
  gridTitle: {
    color: "#a9a9a9",
    display: "grid",
    gap: "0 2%",
    gridTemplateColumns: "20% 10% 10% 17.5% 17.5% 15%",
  },
});

export default useStyles;
