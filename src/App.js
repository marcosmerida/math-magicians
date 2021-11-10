/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './component/Calculator';
import Navfun from './component/navbar';
import Homefun from './component/Home';
import Quote from './component/Quote';

function App() {
  return (
    <Router>
      <div className="App">
        <Navfun />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homefun />
            </Route>
            <Route exact path="/Calculator">
              <Calculator />
            </Route>
            <Route exact path="/Quote">
              <Quote />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
