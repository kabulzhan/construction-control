import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginRoutes from "./pages/login/login-routes";
import MainRoutes from "./pages/main/main-routes";
import useStyles from "./css/App.styles";

function App() {
  const classes = useStyles();
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className={classes.container}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route
          path="/login"
          render={(props) =>
            user ? <Redirect to="/main/sites" /> : <LoginRoutes {...props} />
          }
        />
        <Route
          path="/main"
          render={(props) =>
            user ? (
              <MainRoutes {...props} isAdmin={user.organization} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
