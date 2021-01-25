import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    maxWidth: "100%",
    width: "700px",
    // padding: "0 100px",
  },
  title: { margin: "0 0 5% 10%", fontWeight: 400 },
  main: {
    display: "flex",
    justifyContent: "space-between",
  },
  userInfo: {
    marginLeft: "10%",
    display: "grid",
    gap: "50px 0",
  },
  photo: {
    marginRight: "10%",
    width: "25%",
  },
  editButton: {
    display: "block",
    margin: "5%",
    textAlign: "center",
  },
});

export default useStyles;
