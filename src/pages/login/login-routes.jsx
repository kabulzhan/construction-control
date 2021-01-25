import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./login-page";
import RecoverPage from "./recover-page";
import ResetPasswordPage from "./reset-password";

const LoginRoute = ({ match }) => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={() => (user ? <Redirect to="/main/sites" /> : <LoginPage />)}
      />
      <Route
        exact
        path={`${match.path}/restore_by_email`}
        render={() => (user ? <Redirect to="/main/sites" /> : <RecoverPage />)}
      />

      <Route
        exact
        path={`${match.path}/reset_password_by_email`}
        render={() =>
          user ? (
            <Redirect to="/main/sites" />
          ) : (
            <ResetPasswordPage byemail={true} />
          )
        }
      />
    </>
  );
};

export default LoginRoute;
