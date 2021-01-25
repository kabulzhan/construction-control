import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginRoutes from "./pages/login/login-routes";
import MainRoutes from "./pages/main/main-routes";
import useStyles from "./css/App.styles";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3210";

function App() {
  const classes = useStyles();
  const user = useSelector((state) => state.user.currentUser);
  axios.defaults.headers.authorization = user.token;
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
