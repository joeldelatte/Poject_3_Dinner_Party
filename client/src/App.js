import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./containers/Landing/Landing";
import FeedPage from './containers/Feed/FeedPage';
import CreatePage from './containers/CreatePage/CreatePage';
import DashboardPage from './containers/DashboardPage/DashboardPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/events'>
            <FeedPage />
          </Route>
          <Route exact path='/create'>
            <CreatePage />
          </Route>
          <Route exact path='/dashboard'>
            <DashboardPage />
          </Route>
          <Landing />
          <FeedPage />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
