import React from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomButton from "../../components/buttons/custom-button";
import Modal from "../../components/modal";
import UserRow from "../../components/manage-users/user-row";

const useStyles = createUseStyles({
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
  },
});

const ManageUsers = () => {
  const classes = useStyles();
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
        <CustomButton bgColor="#6B8CFF" br="55px">
          добавить пользователя
        </CustomButton>
      </Link>
    </div>
  );
};

export default ManageUsers;
