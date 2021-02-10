import {BrowserRouter,Switch,Route} from 'react-router-dom';
 
import Login from './views/Login/Index'

import './App.scss';

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/login"></Route>
          {/* <Route component={Home} path="/" exact></Route>
          <Route component={About} path="/about"></Route>
          <Route component={News} path="/news"></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
