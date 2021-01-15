import React from "react";
import { createUseStyles } from "react-jss";

const usestyles = createUseStyles({
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

const UserRow = ({ user }) => {
  const classes = usestyles(user);
  console.log(user.img);
  return (
    <div className={classes.userRow}>
      <div className={classes.userImage}>
        <img src={user.img} />
      </div>
      <div>{`${user.firstname} ${user.lastname}`}</div>
      <div>{`${user.email}`}</div>
      <div>{`${user.tel}`}</div>
    </div>
  );
};

export default UserRow;
