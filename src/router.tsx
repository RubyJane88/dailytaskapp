import React from "react";
import { Route, Switch } from "react-router";

import Homepage from "./pages/Homepage";

const Router = () => {
  return (
    <div>
      <Switch>{<Route exact path={"/"} component={Homepage} />}</Switch>
    </div>
  );
};

export default Router;
