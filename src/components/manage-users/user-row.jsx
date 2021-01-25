import React from "react";
import { Link } from "react-router-dom";
import { useUserRowstyles } from "../../css/manage-users.styles";
import { useSelector } from "react-redux";

const UserRow = ({ user }) => {
  const classes = useUserRowstyles(user);
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className={classes.userRow}>
      <div className={classes.userImage}>
        <img src={user.img} alt="user" />
      </div>
      <Link to={`/main/users/${user.id}`}>{`${user.firstname} ${
        user.lastname
      } ${currentUser.id === user.id ? "(вы)" : ""}`}</Link>
      <div>{`${user.email}`}</div>
      <div>{`${user.tel || ""}`}</div>
    </div>
  );
};

export default UserRow;
