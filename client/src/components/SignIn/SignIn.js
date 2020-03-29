import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import {GET_CURRENT_USER} from "../utils/actions";

export default function SignIn() {
// functionality here

    // const [state, dispatch ] = useStoreContext();

    // const setCurrentUser = () => {
    //   dispatch({ type: GET_CURRENT_USER });
    // };

    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");

    function validateForm() {
      return userName.length > 0 && passWord.length > 0;
    }

    function handleSubmit(event) {
      event.preventDefault();
      console.log(userName, passWord)
    }

    function loadUser(passWord) {
      API.getUser(passWord)
      .then(res => {
        console.log(res);
      });
    }

    return (
      <>
        <div className="container middle">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card border-dark">
              <div className="card-header text-center">Sign In</div>
              <form className="card-body text-dark" onSubmit={ handleSubmit } >
                <div className="form-group">
                  <label htmlFor="username" className="form-row">Username:</label>
                  <input type="text" className="form-control form-row" placeholder="" onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-row">Password:</label>
                  <input type="text" className="form-control form-row" placeholder="" onChange={e => setPassWord(e.target.value)}/>
                </div>
                <div className="form-row justify-content-center" >
                  <button type="submit" className="btn btn-success" disabled={ !validateForm() } onClick={ () =>loadUser(passWord) } >Login</button>                   
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </>
    )

}
