import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
// import Feeds from './components/Feeds/Feeds';
// import Feed from './components/Feeds/Feed/Feed';
import './App.css';

function App() {
  return (
    <div className="container">
      <SignIn />
      {/* <Feed /> */}
    </div>
  );
}

export default App;
