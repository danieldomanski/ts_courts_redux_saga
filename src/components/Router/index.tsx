import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import Courts from "../../pages/courts";
import Schools from "../../pages/schools";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courts" component={Courts} />
      <Route exact path="/schools" component={Schools} />
    </Switch>
  </BrowserRouter>
);

export default Router;
