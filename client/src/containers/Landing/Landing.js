import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer"
import SignIn from "../../components/SignIn/SignIn";

const styles = {
  keepIt: {
    maxWidth: '100%',
    paddingLeft: 0,
    paddingRight: 0
  },
  buttonSpacer: {
    marginTop: 20,
    marginBottom: 20
  }
}

export default function Landing() {
    return (
        <div className="container" style={styles.keepIt}>
          <Jumbotron />
          <div className="row justify-content-center">
            <button className="btn btn-outline-secondary btn-sm" style={styles.buttonSpacer} >Sign up for a new account here.</button>
          </div>
          <SignIn />
          <Footer />
        </div>
    )
}