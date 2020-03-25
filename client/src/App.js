import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./containers/Landing/Landing"
import FeedPage from './containers/Feed/FeedPage';
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div className="container">
      <SignIn />
    </div>
=======
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/events'>
            <FeedPage />
          </Route>
          <Landing />
          <FeedPage />
        </Switch>
      </div>
    </Router>
>>>>>>> c70c28567e7affe3040d16bd4c2af92e4b3dbb28
  );
}

export default App;
