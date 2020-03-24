import React from "react";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer"
import SignIn from "../../components/SignIn/SignIn";

export default function Landing() {
    return (
        <>
          <Jumbotron />
          <SignIn />
          <Footer />
        </>
    )
}