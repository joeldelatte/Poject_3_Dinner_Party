import React from "react";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer"
import SignIn from "../../components/SignIn/SignIn";

const styles = {
  keepIt: {
    maxWidth: '100%',
    paddingLeft: 0,
    paddingRight: 0
  }
}

export default function Landing() {
    return (
        <div className="container" style={styles.keepIt}>
          <Jumbotron />
          <SignIn />
          <Footer />
        </div>
    )
}