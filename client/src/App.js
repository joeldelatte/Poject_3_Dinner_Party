import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Feeds from './components/Feeds/Feeds';
import './App.css';

function App() {
  return (
    <div className="container">
      <SignIn />
    </div>
  );
}

export default App;
