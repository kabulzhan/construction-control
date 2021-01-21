import { createUseStyles } from "react-jss";

export const useTeamStyles = createUseStyles({
  title: {
    margin: "3% 0",
  },
  add: {
    textAlign: "right",
  },
});

export const useContactStyles = createUseStyles({
  title: {
    margin: "3% 0",
  },
  contact: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5% 5%",
    boxSizing: "border-box",
    marginBottom: "2%",
  },
  add: {
    textAlign: "right",
    margin: "2% 0 4%",
  },
});
