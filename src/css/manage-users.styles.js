import { createUseStyles } from "react-jss";

export const useManageUsersStyles = createUseStyles({
  container: {
    margin: "0 32px",
  },
  menuItem: {
    lineHeight: "32px",
    height: "32px",
    width: "115px",
    backgroundColor: "#EBEBEB",
    textAlign: "center",
    fontSize: "12px",
  },
  grid: {
    minHeight: "30px",
    margin: "15px 0",
  },
});

export const useUserRowstyles = createUseStyles({
  userRow: {
    display: "grid",
    gridTemplateColumns: "50px 2fr 1fr 1fr",
    gridTemplateRows: "50px",
    gap: "1rem",
    margin: "5px 0",
    alignItems: "center",
  },
  userImage: {
    overflow: "hidden",
    color: "green",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "70px",
    },
  },
});
