import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./containers/Landing/Landing";
import FeedPage from './containers/Feed/FeedPage';
import CreatePage from './containers/CreatePage/CreatePage';
import './App.css';
import {UserContext} from "./utils/UserContext";

function App() {
  const [globalUserName, setGlobalUserName] = useState("");

  return (
    <Router>
      <div>
        <Switch>
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
        </UserContext.Provider>
          <Landing />
          <FeedPage />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
