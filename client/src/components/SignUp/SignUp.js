import React, { useState, useContext } from "react";
import { Link  } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import {UserContext} from "../../utils/UserContext";
import { UserIdContext } from "../../utils/UserIdContext";


export default function SignUp() {
// functionality here
const {globalUserName, setGlobalUserName} = useContext(UserContext);
const {globalUserId, setGlobalUserId} = useContext(UserIdContext);

const [passWord, setPassWord] = useState("");

    function validateForm() {
      return globalUserName.length > 0 && passWord.length > 0;
    }

    function handleSubmit(event) {
      event.preventDefault();
      console.log(globalUserName, passWord);
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
                  <label htmlFor="username" className="form-row">Username:</label>
                  <input type="text" className="form-control form-row" placeholder="" onChange={e => setGlobalUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-row">Password:</label>
                  <input type="text" className="form-control form-row" placeholder="" />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-row">Confirm Password:</label>
                  <input type="text" className="form-control form-row" placeholder="" onChange={e => setPassWord(e.target.value)}/>
                </div>
                <div className="form-row justify-content-center" >
                  {(validateForm() &&
                    <Link  to="/events" role="button" type="submit" className="btn btn-success" onClick={ () => createUser() } >Sign Up</Link>) 
                    || <Link role="button" className="btn btn-success">Sign Up</Link>} 
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </>
    )

}