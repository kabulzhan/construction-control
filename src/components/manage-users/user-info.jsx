import React from "react";
import { useParams, Link } from "react-router-dom";
import useStyles from "../../css/user-info.styles";
import CustomButton from "../buttons/custom-button";
import { useSelector } from "react-redux";

const User = () => {
  const classes = useStyles();
  const { user_id } = useParams();
  const usersList = useSelector((state) => state.user.usersList);
  const userDetails = usersList.find((user) => user.id === Number(user_id));

  if (userDetails) {
    return (
      <div className={classes.container}>
        <h2 className={classes.title}>Информация о пользователе</h2>
        <div className={classes.main}>
          <div className={classes.userInfo}>
            <div>
              Имя
              <div>{`${userDetails.firstname} ${userDetails.lastname}`}</div>
            </div>
            <div>
              Электронная почта
              <div>{userDetails.email}</div>
            </div>
            <div>
              Телефон
              <div>{userDetails.tel}</div>
            </div>
          </div>
          <div className={classes.photo}>
            <div>{`${userDetails.img}`}</div>
          </div>
        </div>
        <Link className={classes.editButton} to={`/main/users/edit/${user_id}`}>
          <CustomButton>Редактировать</CustomButton>
        </Link>
      </div>
    );
  }
  return <div className={classes.container}></div>;
};

export default User;
