import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getUsersStart } from "../../redux/user/user.actions";
import { Link } from "react-router-dom";
import { useManageUsersStyles } from "../../css/manage-users.styles";
import CustomButton from "../../components/buttons/custom-button";
import UserRow from "../../components/manage-users/user-row";

const ManageUsers = () => {
  const classes = useManageUsersStyles();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    dispatch(clearErrors());
    dispatch(getUsersStart(admin));
  }, [dispatch, admin]);
  const isFetchingUsers = useSelector((state) => state.user.isFetching);
  const requestError = useSelector((state) => state.user.error);
  const usersList = useSelector((state) => state.user.usersList);

  return (
    <div className={classes.container}>
      <h4>Панель администратора</h4>
      <div>
        <div className={classes.menuItem}>Пользователи</div>
      </div>
      <div className={isFetchingUsers ? classes.loading : classes.error}>
        {isFetchingUsers
          ? "Загружается список пользователей..."
          : requestError
          ? requestError
          : ""}
      </div>
      <div className={classes.grid}>
        {usersList.map((user) => (
          <UserRow user={user} key={user.id} />
        ))}
      </div>
      <Link to="/main/users/add_user" className={classes.addUser}>
        <CustomButton>добавить пользователя</CustomButton>
      </Link>
    </div>
  );
};

export default ManageUsers;
