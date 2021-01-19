import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "../../css/Sites.styles";
import CustomButton from "../../components/buttons/custom-button";

const Sites = () => {
  const classes = useStyles();
  const [completed, selectCompleted] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Объекты</h2>
        <Link to="/main/sites/add_site">
          <CustomButton>Добавить объект</CustomButton>
        </Link>
      </div>
      <div className={classes.menu}>
        <span
          className={!completed && classes.completed}
          onClick={() => selectCompleted(false)}
        >
          Актуальные
        </span>
        <span
          className={completed && classes.completed}
          onClick={() => selectCompleted(true)}
        >
          Завершенные
        </span>
      </div>
      <div className={classes.gridTitle}>
        <span>название</span>
        <span>проверок на сегодня</span>
        <span>претензий исправлено</span>
        <span>адрес</span>
        <span>контакт</span>
        <span>админ/команда</span>
      </div>
    </div>
  );
};

export default Sites;
