import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    padding: "0 40px 27px",
    width: "700px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 10px 14px ",
  },
  title: {
    fontSize: "20px",
  },
  subtitle: {
    fontSize: "12px",
    padding: "23px 5px 11px",
  },
  block: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  label: {
    fontSize: "12px",
    paddingLeft: "5px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "21px",
  },
  buttons: {
    padding: "30px 100px 15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "12px",
  },
  delete: {
    fontSize: "12px",
    color: "#FF6262 !important",
  },
});

export default useStyles;
