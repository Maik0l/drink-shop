import { Switch, Route } from "react-router-dom";
import Celebration from "../pages/Celebration";
import Prom from "../pages/Prom";
import Wedding from "../pages/Wedding";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/prom">
        <Prom />
      </Route>
      <Route path="/celebration">
        <Celebration />
      </Route>
      <Route path="/wedding">
        <Wedding />
      </Route>
    </Switch>
  );
};

export default Routes;
