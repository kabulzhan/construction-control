import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/buttons/custom-button";
import FormInput from "../../components/input-forms";
import { useLoginPageStyles } from "../../css/login.styles";

const Recover = () => {
  const classes = useLoginPageStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("recover submit handled");
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.inputs}>
        <div>
          Для восстановления пароля, укажите идентификатор компании и
          электронную почту, указанную при регистрации. Если что-то из этого не
          помните, свяжитесь с вашим администратором.
        </div>
        <FormInput label="Идентификатор компании" loginStyle />
        <FormInput label="Электронная почта" type="email" loginStyle />
      </div>
      <div className={classes.recoverButtons}>
        <CustomButton loginButton>Готово</CustomButton>
        <Link className={classes.loginLink} to="/login">
          Вход
        </Link>
      </div>
    </form>
  );
};

export default Recover;
