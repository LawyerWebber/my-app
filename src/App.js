import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './views/Home'
import About from './views/About'
import News from './views/News'

import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div>
      <h1>react中用sass</h1>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact></Route>
          <Route component={About} path="/about"></Route>
          <Route component={News} path="/news"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
