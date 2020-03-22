import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";

export default function SignIn() {
// functionality here
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
      return userName.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
      event.preventDefault();
    }

    function logIn() {
      API.getUser()
      .then(res => {
        if (userName === res.data.username) {
          
          console.log("pass a function here that sets the state of the session")
        } else { alert("incorrect name and password")}
      })
    }

    return (
      <>
        <div class="container row justify-content-center">
          <div className="card border-dark">
            <div className="card-header">Sign In</div>
            <form className="card-body text-dark" >
              <div className="form-group">
                <label for="username" className="form-row">Username:</label>
                <input type="text" clasName="form-control form-row" placeholder="" onChange={e => setPassword(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="password" className="form-row">Password:</label>
                <input type="text" clasName="form-control form-row" placeholder="" onChange={e => setUserName(e.target.value)}/>
              </div>
              <div className="form-row justify-content-center" >
                <button type="submit" className="btn btn-success" disabled={ !validateForm() } onClick={ logIn() } onSubmit={ handleSubmit }>Login</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
}