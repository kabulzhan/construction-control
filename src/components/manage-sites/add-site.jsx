import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../../css/add-site.styles";
import { FormInput, TextArea, SelectForm } from "../input-forms";
import CustomButton from "../buttons/custom-button";
import Team from "./team";

const AddSite = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <h2 className={classes.title}>Добавить объект</h2>
        <FormInput label="Название" />
        <div className={classes.addressAndStatus}>
          <TextArea label="Адрес" height="10vh" />
          <SelectForm
            options={{ incomplete: "В работе", complete: "Завершен" }}
            defaultOption="incomplete"
            label="Статус"
          />
        </div>
        <h5>Контакты</h5>
        <div className={classes.contact}>
          <FormInput label="Имя" />
          <FormInput label="Телефон" />
          <FormInput label="Электронная почта" />
          <FormInput label="Другие способы связи" />
        </div>
        <div className={classes.add}>
          <CustomButton>добавить контакт</CustomButton>
        </div>
        <div className={classes.section}>
          <TextArea label="Правила попадания на объект" height="15vh" />
          <TextArea label="Общее описание" height="15vh" />
          <FormInput label="Электронные почты заказчика для отправки уведомлений" />
        </div>
        <div className={classes.add}>
          <CustomButton>добавить</CustomButton>
        </div>
        <TextArea label="Данные заказчика" height="15vh" />
        <Team edit />
        <div className={classes.buttons}>
          <CustomButton submit>добавить</CustomButton>
          <Link to={props.path}>Отмена</Link>
        </div>
        <Link to="#" className={classes.delete}>
          Удалить
        </Link>
      </div>
    </div>
  );
};

export default AddSite;
