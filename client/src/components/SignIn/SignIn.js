import React, { useRef, useContext } from "react";
import "./style.css";
import API from "../../utils/API";
import {UserContext} from "../../utils/UserContext";

export default function SignIn() {
// functionality here

    const {userName, setUserName} = useContext(UserContext);
    // const {passWord, setPassWord} = useContext(UserContext);

    const userNameRef = useRef();
    const passWordRef = useRef();

    // I need to fix this. Possibly will work as before when I import and use useState for username and password again.
    function validateForm() {
      return userNameRef.length > 0 && passWordRef.length > 0;
    }
    // should I combine handleSubmit and loadUser?
    function handleSubmit(event) {
      event.preventDefault();
      
    }

    function loadUser(passWordRef) {
      API.getUser(passWordRef)
      .then(res => {
        setUserName(res.data.username);
        // setPassWord(res.data.password);
        // console.log(res.data.username);
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
                  <input type="text" className="form-control form-row" placeholder="" ref={userNameRef}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-row">Password:</label>
                  <input type="text" className="form-control form-row" placeholder="" ref={passWordRef}/>
                </div>
                <div className="form-row justify-content-center" >
                  <button type="submit" className="btn btn-success" disabled={ validateForm() } onClick={ () =>loadUser(passWordRef.current.value) } >Login</button>                   
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
    )

}