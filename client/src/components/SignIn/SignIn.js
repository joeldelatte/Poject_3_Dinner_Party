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

    function loadUser() {
      API.getUser()
      .then(res => {
        console.log(res.data);
      });
    }

    return (
      <>
        <div className="container middle">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card border-dark">
              <div className="card-header">Sign In</div>
              <form className="card-body text-dark" >
                <div className="form-group">
                  <label htmlFor="username" className="form-row">Username:</label>
                  <input type="text" className="form-control form-row" placeholder="" onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-row">Password:</label>
                  <input type="text" className="form-control form-row" placeholder="" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="form-row justify-content-center" >
                  <button type="submit" className="btn btn-success" disabled={ !validateForm() } onClick={ loadUser() } onSubmit={ handleSubmit }>Login</button>                   
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </>
    )

}
