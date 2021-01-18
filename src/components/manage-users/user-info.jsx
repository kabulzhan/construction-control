import React from "react";
import { useParams } from "react-router-dom";
import useStyles from "../../css/user-info.styles";
import CustomButton from "../buttons/custom-button";

const User = () => {
  const classes = useStyles();
  const { id } = useParams();
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Информация о пользователе</h2>
      <div className={classes.main}>
        <div className={classes.userInfo}>
          <div>
            Имя
            <div>placeholder user name</div>
          </div>
          <div>
            Электронная почта
            <div>placeholder@mail.ru</div>
          </div>
          <div>
            Телефон
            <div>+ 777 7777 77777</div>
          </div>
        </div>
        <div className={classes.photo}>
          <div>Фото</div>
        </div>
      </div>
      <div className={classes.editButton}>
        <CustomButton>Редактировать</CustomButton>
      </div>
    </div>
  );
};

export default User;
