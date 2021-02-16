import React from "react";
import { Switch } from "react-router-dom";
import MyRouter from "./MyRouter";
import List from "../../../User/List";
import Add from "../../../User/Add";

export default function Index() {
  return (
    <Switch>
      <MyRouter component={List} path="/index/user/list" exact></MyRouter>
      <MyRouter component={Add} path="/index/user/add" exact></MyRouter>
      {/* <Route component={Home} path="/" exact></Route>
          <Route component={About} path="/about"></Route>
          <Route component={News} path="/news"></Route> */}
    </Switch>
  );
}
