import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersStart } from "../../redux/user/user.actions";
import Header from "../../components/header/header-component";
import Modal from "../../components/modal";
import Users from "./Users";
import Sites from "./Sites";
import AddUser from "../../components/manage-users/add-user";
import UserInfo from "../../components/manage-users/user-info";
import AddSite from "../../components/manage-sites/add-site";
import AddSubsection from "../../components/manage-sites/add-subsection";
import ResetPasswordPage from "../login/reset-password";

const MainRoutes = ({ match: { path } }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const usersList = useSelector((state) => state.user.usersList);

  useEffect(() => {
    dispatch(getUsersStart(currentUser));
  }, [dispatch, currentUser]);

  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path={`${path}/users`}
          render={() =>
            currentUser.organization ? <Users /> : <Redirect to="/main/sites" />
          }
        />
        <Route
          exact
          path={`${path}/users/add_user`}
          render={() =>
            currentUser.organization ? (
              <Modal child={AddUser} path="/main/users" />
            ) : (
              <Redirect to="/main/sites" />
            )
          }
        />
        <Route
          exact
          path={`${path}/users/edit/:user_id`}
          render={({ match: { params } }) => {
            const userToEdit = usersList.find(
              (user) => user.id === Number(params.user_id)
            );
            console.log("USER TO EDIT: ", userToEdit);
            return currentUser.organization ? (
              <Modal
                child={AddUser}
                path="/main/users"
                userToEdit={userToEdit}
              />
            ) : (
              <Redirect to="/main/sites" />
            );
          }}
        />
        <Route
          exact
          path={`${path}/users/:user_id`}
          render={() => <Modal child={UserInfo} path="/main/users" />}
        />
        <Route exact path={`${path}/sites`} component={Sites} />
        <Route
          exact
          path={`${path}/sites/add_site`}
          render={() => <Modal child={AddSite} path="/main/sites/" />}
        />
        <Route
          exact
          path={`${path}/sites/:site_id/subsections/add_subsection`}
          render={(props) => {
            const { site_id } = props.match.params;
            return (
              <Modal child={AddSubsection} path={`/main/sites/${site_id}`} />
            );
          }}
        />
        <Route
          exact
          path={`${path}/reset_password`}
          component={ResetPasswordPage}
        />
      </Switch>
    </>
  );
};

export default MainRoutes;
