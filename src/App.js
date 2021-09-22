import React from 'react';
import './index.css';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import MainPage from './components/MainPage'



function App() {
  return (
    <Router>
      <Switch>
        <Route path="works">

        </Route>
        <Route>
          <MainPage></MainPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
