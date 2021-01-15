import React from "react";
import { Route } from "react-router-dom";
import Header from "../../components/header/header-component";
import ManageUsers from "./manage-users";
import Modal from "../../components/modal";
import AddUser from "../../components/manage-users/add-user";

const MainRoutes = ({ match: { path } }) => {
  return (
    <>
      <Header />
      <Route exact path={`${path}`} component={ManageUsers} />
      <Route
        exact
        path={`${path}/add_user`}
        render={() => <Modal child={AddUser} path="/main" />}
      />
    </>
  );
};

export default MainRoutes;
