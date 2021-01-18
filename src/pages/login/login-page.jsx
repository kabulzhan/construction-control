import React from "react";
import { Link, useHistory } from "react-router-dom";
import CustomButton from "../../components/buttons/custom-button";
import { useLoginPageStyles } from "../../css/login.styles";
import FormInput from "../../components/form-input/form-input";

const Login = () => {
  const classes = useLoginPageStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/main");
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.inputs}>
        <FormInput
          label="Идентификатор компании"
          value="placeholder"
          loginStyle
        />
        <FormInput
          label="Электронная почта"
          type="email"
          value="placeholder@mail.ru"
          loginStyle
        />
        <FormInput
          label="Пароль"
          type="password"
          value="placeholder"
          loginStyle
        />
      </div>
      <Link className={classes.link} to="/login/restore_by_email">
        Забыли пароль?
      </Link>
      <CustomButton loginButton>Войти</CustomButton>
    </form>
  );
};

export default Login;
