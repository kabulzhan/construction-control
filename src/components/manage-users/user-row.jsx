import React from "react";
import { useUserRowstyles } from "../../css/manage-users.styles";

const UserRow = ({ user }) => {
  const classes = useUserRowstyles(user);
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
