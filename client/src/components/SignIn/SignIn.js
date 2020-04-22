import React, { useState, useContext } from "react";
// import { createBrowserHistory } from "history";
import { BrowserRouter as Switch, Redirect, Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import {UserContext} from "../../utils/UserContext";
import {UserIdContext} from "../../utils/UserIdContext";

export default function SignIn() {
// functionality here
    const {globalUserName, setGlobalUserName} = useContext(UserContext);
    const {globalUserId, setGlobalUserId} = useContext(UserIdContext);
    const [passWord, setPassWord] = useState("");
    const [next, setNext] = useState(false)

    function validateForm() {
      return globalUserName.length > 6 && passWord.length > 6; 
    }

    function handleSubmit(event) {
      event.preventDefault();
    }

    function createGlobalUserData(res) {
      setGlobalUserId(res.data.id);
      setGlobalUserName(res.data.username);
      setNext(true);
    }

    function loadUser(passWord) {
      API.getUser(passWord)
      .then(res => {
        createGlobalUserData(res) 
      })
      .catch(err => console.log(err));
    }

    return (
        <div className="container middle">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card border-dark">
              <div className="card-header text-center">Sign In</div>
              <form className="card-body text-dark" onSubmit={ handleSubmit } >
                <div className="form-group">
                  <label htmlFor="username" className="form-row">Username:</label>
                  <input type="text" className="form-control form-row" placeholder="" onChange={e => setGlobalUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-row">Password:</label>
                  <input type="text" className="form-control form-row" placeholder="" onChange={e => setPassWord(e.target.value)}/>
                </div>
                <div className="form-row justify-content-center" >
                  <button type="submit" disabled={!validateForm()} className="btn btn-sm btn-primary" onClick={ () => loadUser(passWord) } >Login</button>
                  {(next && <Link  to="/events" role="button" type="submit" className="btn btn-success"  >Enter Dinner Party</Link>)}
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
        
    )

}