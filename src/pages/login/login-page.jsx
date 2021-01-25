import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, clearErrors } from "../../redux/user/user.actions";
import CustomButton from "../../components/buttons/custom-button";
import { useLoginPageStyles } from "../../css/login.styles";
import FormInput from "../../components/input-forms";

const Login = () => {
  const classes = useLoginPageStyles();
  const dispatch = useDispatch();

  useEffect(() => dispatch(clearErrors()), [dispatch]);

  const loginError = useSelector((state) => state.user.error);
  const isUserLoggingIn = useSelector((state) => state.user.isFetching);

  const [userCredentials, setCredentials] = useState({
    company_id: "",
    email: "ivanov@ivanov.ru",
    password: "123456",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInStart(userCredentials));
  };

  const handleChange = (e) => {
    setCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.error}>{loginError}</div>
      <div className={classes.inputs}>
        <FormInput
          label="Идентификатор компании"
          value={userCredentials.company_id}
          name="company_id"
          onChange={handleChange}
          loginstyle
        />
        <FormInput
          label="Электронная почта"
          type="email"
          name="email"
          value={userCredentials.email}
          onChange={handleChange}
          loginstyle
          required
        />
        <FormInput
          label="Пароль"
          type="password"
          name="password"
          value={userCredentials.password}
          onChange={handleChange}
          loginstyle
          required
        />
      </div>
      <Link className={classes.link} to="/login/restore_by_email">
        Забыли пароль?
      </Link>
      <CustomButton loginButton disabled={isUserLoggingIn}>
        {isUserLoggingIn ? "авторизация..." : "Войти"}
      </CustomButton>
    </form>
  );
};

export default Login;
