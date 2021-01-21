import React from "react";
import { Link } from "react-router-dom";
import { useUserRowstyles } from "../../css/manage-users.styles";

const UserRow = ({ user }) => {
  const classes = useUserRowstyles(user);
  console.log(user.img);
  return (
    <div className={classes.userRow}>
      <div className={classes.userImage}>
        <img src={user.img} alt="user" />
      </div>
      <Link to="/main/users/kabulzhan">{`${user.firstname} ${user.lastname}`}</Link>
      <div>{`${user.email}`}</div>
      <div>{`${user.tel}`}</div>
    </div>
  );
};

export default UserRow;
