import React from "react";
import { Route, Redirect } from "react-router-dom";
import LoginPage from "./login-page";
import RecoverPage from "./recover-page";
import ResetPasswordPage from "./reset-password";

const LoginRoute = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}`} component={LoginPage} />
      <Route
        exact
        path={`${match.path}/restore_by_email`}
        component={RecoverPage}
      />
      <Route
        exact
        path={`${match.path}/reset_password_by_email`}
        render={() => <ResetPasswordPage byemail={true} />}
      />
      <Route
        exact
        path={`${match.path}/reset_password`}
        render={() => <ResetPasswordPage />}
      />
      <Route path="/login/login/" render={() => <Redirect to="/" />} />
    </>
  );
};

export default LoginRoute;
