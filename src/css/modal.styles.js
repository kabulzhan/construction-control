import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  modal: {
    height: "100%",
    width: "100%",
    position: "fixed",
    backgroundColor: "#302D42",
    left: 0,
    top: 0,
    zIndex: 6,
    display: "flex",
  },
  modalBody: {
    maxWidth: "80%",
    backgroundColor: "white",
    border: "25px solid #e5e5e5",
    margin: "auto",
    padding: "0 10px",
  },
  close: {
    width: "100%",
    textAlign: "right",
    fontSize: "16px",
    lineHeight: "35px",
    height: "35px",
  },
  closeBtn: {
    paddingRight: "10px",
    paddingTop: "10px",
    marginTop: "10px",
    cursor: "pointer",
  },
});

export default useStyles;
