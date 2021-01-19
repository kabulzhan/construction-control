import React from "react";
import { Route } from "react-router-dom";
import Header from "../../components/header/header-component";
import Modal from "../../components/modal";
import Users from "./Users";
import Sites from "./Sites";
import AddUser from "../../components/manage-users/add-user";
import UserInfo from "../../components/manage-users/user-info";
import AddSite from "../../components/manage-sites/add-site";

const MainRoutes = ({ match: { path } }) => {
  return (
    <>
      <Header />
      <Route exact path={`${path}/users`} component={Users} />
      <Route
        exact
        path={`${path}/add_user`}
        render={() => <Modal child={AddUser} path="/main/users" />}
      />
      <Route
        exact
        path={`${path}/users/:id`}
        render={() => <Modal child={UserInfo} path="/main/users" />}
      />

      <Route exact path={`${path}/sites`} component={Sites} />
      <Route
        exact
        path={`${path}/sites/add_site`}
        render={() => <Modal child={AddSite} path="/main/sites/" />}
      />
    </>
  );
};

export default MainRoutes;
