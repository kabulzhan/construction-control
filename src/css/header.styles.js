import { createUseStyles } from "react-jss";

export const useHeaderStyles = createUseStyles({
  header: {
    height: "66px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#ebebeb",
  },
  leftMenu: {
    padding: "0 23px",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  triangle: {
    padding: "2px 10px 0 16px",
    height: "12px",
  },
  username: {
    fontSize: "20px",
  },
  logout: {
    paddingRight: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    height: "100%",
  },
});

export const useMenuStyles = createUseStyles({
  dropdownMenu: {
    position: "absolute",
    top: "66px",
    width: "768px",
    zIndex: 5,
    backgroundColor: "#F8F8F8",
    display: "flex",
    flexDirection: "column",
  },
  loginMenu: {
    textAlign: "right",
    paddingRight: "10px",
    display: "flex",
    flexDirection: "column",
  },
  menuItem: {
    paddingLeft: "10px",
    height: "52px",
    lineHeight: "52px",
    textDecoration: "none",
    color: "black !important",
  },
});
