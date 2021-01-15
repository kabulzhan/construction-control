import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/buttons/custom-button";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  form: {
    width: "321px",
    margin: "auto",
  },
  instructions: {
    marginBottom: "33px",
    textAlign: "center",
  },
  link: {
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    marginTop: "18px",
  },
  note: {
    height: "40px",
    paddingTop: "6px",
    paddingLeft: "5px",
    color: "#1AA839",
  },
  checkConfirmation: {
    height: "49px",
    paddingTop: "6px",
    paddingLeft: "5px",
  },
  error: {
    color: "#FF6262",
  },
});

const handleSubmit = (e) => {
  e.preventDefault();
};

const ResetPasswordByEmail = ({ byemail }) => {
  const classes = useStyles();
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
          <>
            <h3 className={classes.instructions}>Сменить пароль</h3>
            <FormInput
              label="Старый пароль"
              type="password"
              mBtm="40px"
              fs="14px"
              height="44px"
              name="oldPassword"
              onChange={handleChange}
              value={newCredentials.oldPassword}
            />
          </>
        )}
        <FormInput
          label="Новый пароль"
          type="password"
          value={newCredentials.newPassword}
          onChange={handleChange}
          name="newPassword"
          fs="14px"
          height="44px"
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
          fs="14px"
          height="44px"
        />
        <div
          className={`${classes.note} ${
            passwordMatchMsg.error && classes.error
          }`}
        >
          {passwordMatchMsg.message}
        </div>
        <CustomButton
          bgColor="#1AA839"
          height="44px"
          width="100%"
          type="submit"
        >
          {`Сменить пароль ${byemail ? "и войти" : ""}`}
        </CustomButton>
      </form>
    </>
  );
};

export default ResetPasswordByEmail;
