import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Home from "../containers/Home/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
