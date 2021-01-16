import React, { useState, useEffect } from "react";
import CustomButton from "../../components/buttons/custom-button";
import FormInput from "../../components/form-input/form-input";
import { useLoginPageStyles } from "../../css/login.styles";

const handleSubmit = (e) => {
  e.preventDefault();
};

const ResetPasswordByEmail = ({ byemail }) => {
  const classes = useLoginPageStyles();

  const [newCredentials, setNewCredentials] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordLengthMsg, setPasswordLengthMsg] = useState({
    message: "",
    error: false,
  });

  const [passwordMatchMsg, setPasswordMatchMsg] = useState({
    message: "",
    error: false,
  });

  useEffect(() => {
    if (!newCredentials.newPassword) {
      if (passwordLengthMsg.message) {
        setPasswordLengthMsg({ message: "", error: false });
      }
    } else if (newCredentials.newPassword.length < 6) {
      if (!passwordLengthMsg.error) {
        setPasswordLengthMsg({
          message: "Длина пароля должна быть не менее 6 симоволов",
          error: true,
        });
      }
    } else if (passwordLengthMsg.error) {
      setPasswordLengthMsg({
        message: "Отличный пароль! Мы гордимся вами!",
        error: false,
      });
    }
  }, [newCredentials.newPassword]);

  useEffect(() => {
    if (!newCredentials.confirmPassword) return;
    if (newCredentials.confirmPassword !== newCredentials.newPassword) {
      setPasswordMatchMsg({
        message: "Пароль и подтверждение не совпадают",
        error: true,
      });
    } else {
      if (passwordMatchMsg.message) {
        setPasswordMatchMsg({
          message: "",
          error: false,
        });
      }
    }
  }, [newCredentials.confirmPassword]);

  const handleChange = (e) => {
    setNewCredentials({ ...newCredentials, [e.target.name]: e.target.value });
  };

  console.log("resetPasswordByEmail has been rendered");
  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        {byemail ? (
          <div className={classes.instructions}>
            Восстановление пароля для аккаунта {`placeholderAccount`},
            идентификатор компании {`placeholderCompany`}
          </div>
        ) : (
          <div className={classes.oldPassword}>
            <h3 className={classes.instructions}>Сменить пароль</h3>
            <FormInput
              label="Старый пароль"
              type="password"
              name="oldPassword"
              onChange={handleChange}
              value={newCredentials.oldPassword}
              loginStyle
            />
          </div>
        )}
        <FormInput
          label="Новый пароль"
          type="password"
          value={newCredentials.newPassword}
          onChange={handleChange}
          name="newPassword"
          loginStyle
        />
        <div
          className={`${classes.note} ${
            passwordLengthMsg.error && classes.error
          } `}
        >
          {passwordLengthMsg.message}
        </div>
        <FormInput
          label="Подтверждение"
          type="password"
          value={newCredentials.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          loginStyle
        />
        <div
          className={`${classes.note} ${
            passwordMatchMsg.error && classes.error
          }`}
        >
          {passwordMatchMsg.message}
        </div>
        <CustomButton loginButton>
          {`Сменить пароль ${byemail ? "и войти" : ""}`}
        </CustomButton>
      </form>
    </>
  );
};

export default ResetPasswordByEmail;
