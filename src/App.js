import React from 'react';
import './index.css';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import MainPage from './components/MainPage'
import WorksPage from './components/WorksPage'
import More from './components/More'



function App() {
  
  
  return (
    <Router>
      <Switch>
        <Route path="/more">
            <More></More>
        </Route>
        <Route path="/works">
            <WorksPage></WorksPage>
        </Route>
        <Route>
          <MainPage path="/"></MainPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
