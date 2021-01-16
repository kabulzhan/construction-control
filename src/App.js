import { Switch, Route, Redirect } from "react-router-dom";
import LoginRoutes from "./pages/login/login-routes";
import MainRoutes from "./pages/main/main-routes";
import useStyles from "./css/App.styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={LoginRoutes} />
        <Route path="/main" component={MainRoutes} />
        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
