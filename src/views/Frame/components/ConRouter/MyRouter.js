import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getValue } from "../../../../utils/cookie";

export default function MyRouter({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        console.log(getValue("userInfo"));
        getValue("userInfo") && JSON.parse(getValue("userInfo")).token ? (
          <Component {...routeProps} />
        ) : (
          //   console.log("111")
          <Redirect to="/"></Redirect>
        );
      }}
    />
  );
}
