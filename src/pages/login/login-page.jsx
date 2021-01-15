import React from "react";
import { Link, useHistory } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/buttons/custom-button";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  form: {
    width: "321px",
    margin: "auto",
  },
  link: {
    float: "right",
  },
  hello: {
    height: "20px",
    backgroundColor: "blue",
    position: "absolute",
    top: "10%",
  },
});

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push("/main");
  };

  return (
    <form className={classes.form}>
      <FormInput
        label="Идентификатор компании"
        type="text"
        mBtm="31px"
        fs="14px"
        height="44px"
        value="placeholder"
      />
      <FormInput
        label="Электронная почта"
        type="email"
        mBtm="31px"
        fs="14px"
        height="44px"
        value="placeholder@mail.ru"
      />
      <FormInput
        label="Пароль"
        type="password"
        mBtm="11px"
        fs="14px"
        height="44px"
        value="placeholder"
      />
      <Link className={classes.link} to="login/restore_by_email">
        Забыли пароль?
      </Link>
      <CustomButton
        bgColor="#1AA839"
        height="44px"
        width="100%"
        mTop="46px"
        onClick={handleClick}
      >
        Войти
      </CustomButton>
    </form>
  );
};

export default Login;
