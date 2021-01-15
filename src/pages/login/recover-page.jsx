import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/buttons/custom-button";

const useStyles = createUseStyles({
  form: {
    width: "321px",
    margin: "auto",
  },
  instructions: {
    marginBottom: "33px",
  },
  link: {
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    marginTop: "18px",
  },
});

const handleSubmit = (e) => {
  e.preventDefault();
};

const Recover = () => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.instructions}>
          Для восстановления пароля, укажите идентификатор компании и
          электронную почту, указанную при регистрации. Если что-то из этого не
          помните, свяжитесь с вашим администратором.
        </div>
        <FormInput
          label="Идентификатор компании"
          type="text"
          mBtm="25px"
          fs="14px"
          height="44px"
        />
        <FormInput
          label="Электронная почта"
          type="email"
          fs="14px"
          height="44px"
        />
        <CustomButton
          bgColor="#1AA839"
          height="44px"
          width="100%"
          mTop="46px"
          type="submit"
        >
          Готово
        </CustomButton>
        <Link className={classes.link} to="/login">
          Вход
        </Link>
      </form>
    </>
  );
};

export default Recover;
