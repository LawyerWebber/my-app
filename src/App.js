import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./views/Login/Index";
import Frame from "./views/Frame/Index";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Frame} path="/index/user/add"></Route>
        <Route component={Login} path="/" exact></Route>
        {/* <Route component={Home} path="/" exact></Route>
          <Route component={About} path="/about"></Route>
          <Route component={News} path="/news"></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
