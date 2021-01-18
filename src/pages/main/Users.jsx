import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useManageUsersStyles } from "../../css/manage-users.styles";
import CustomButton from "../../components/buttons/custom-button";
import UserRow from "../../components/manage-users/user-row";

const ManageUsers = () => {
  const classes = useManageUsersStyles();
  const usersList = useSelector((state) => state.user.usersList);
  return (
    <div className={classes.container}>
      <h4>Панель администратора</h4>
      <div>
        <div className={classes.menuItem}>Пользователи</div>
      </div>
      <div className={classes.grid}>
        {usersList.map((user) => (
          <UserRow user={user} />
        ))}
      </div>
      <Link to="/main/add_user">
        <CustomButton>добавить пользователя</CustomButton>
      </Link>
    </div>
  );
};

export default ManageUsers;
