import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./containers/Landing/Landing";
import FeedPage from './containers/Feed/FeedPage';
import CreatePage from './containers/CreatePage/CreatePage';
import DashboardPage from './containers/DashboardPage/DashboardPage';
import './App.css';
import {UserContext} from "./utils/UserContext";
import { UserIdContext } from './utils/UserIdContext';

function App() {
  const [globalUserName, setGlobalUserName] = useState("");
  const [globalUserId, setGlobalUserId] = useState("")

  return (
    <Router>
      <div>
        <Switch>
        <UserIdContext.Provider value={{globalUserId, setGlobalUserId}}>
        <UserContext.Provider value={{globalUserName, setGlobalUserName}}>
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
        </UserContext.Provider>
        </UserIdContext.Provider>    
          <Landing />
          <FeedPage />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
