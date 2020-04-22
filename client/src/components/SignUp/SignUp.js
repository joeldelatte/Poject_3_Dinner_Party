import React, { useState, useContext } from "react";
import { createBrowserHistory } from "history";
import "./style.css";
import API from "../../utils/API";
import {UserContext} from "../../utils/UserContext";
import { UserIdContext } from "../../utils/UserIdContext";


export default function SignUp() {
// functionality here
const history = createBrowserHistory();
const {globalUserName, setGlobalUserName} = useContext(UserContext);
const {globalUserId, setGlobalUserId} = useContext(UserIdContext);

const [passWord, setPassWord] = useState("");

    function validateForm() {
      return globalUserName.length >= 6 && passWord.length >= 6;
    }

    function handleSubmit(event) {
      event.preventDefault();
      history.replace({pathname: "/events"});
    };

    function createGlobalUserData(res) {
      setGlobalUserId(res.data.id);
      setGlobalUserName(res.data.username);
    }

    function createUser() {

      API.postUser({
        username: globalUserName,
        password: passWord
      })
      .then(res => {
        createGlobalUserData(res);
      });
    };

    return (
      <>
        <div className="container middle">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card border-dark">
              <div className="card-header text-center">Create Account</div>
              <form className="card-body text-dark" onSubmit={ handleSubmit } >
                <div className="form-group">
                  <label htmlFor="username" className="form-row">Username (6 or more characters)</label>
                  <input type="text" className="form-control form-row" placeholder="" onChange={e => setGlobalUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-row">Password (6 or more characters)</label>
                  <input type="text" className="form-control form-row" placeholder="" />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-row">Confirm Password</label>
                  <input type="text" className="form-control form-row" placeholder="" onChange={e => setPassWord(e.target.value)}/>
                </div>
                <div className="form-row justify-content-center" >
                  <button type="submit" disabled={!validateForm()} className="btn btn-primary" onClick={ () => createUser() } >Sign Up</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </>
    )

}