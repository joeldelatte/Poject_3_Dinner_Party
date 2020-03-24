import React from 'react';
// import Landing from "./containers/Landing/Landing";
import SignIn from "./components/SignIn/SignIn";
import Jumbotron from "./containers/Landing/Jumbotron";
import Footer from "./containers/Landing/Footer";

import './App.css';

function App() {
  return (
    <div className="container">
      {/* <Landing /> */}
      <Jumbotron />
      <SignIn />
      <Footer />
    </div>
  );
}

export default App;
