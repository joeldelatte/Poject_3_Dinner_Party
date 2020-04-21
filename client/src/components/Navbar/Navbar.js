import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from "../../utils/UserContext";
import {UserIdContext} from "../../utils/UserIdContext";
import './Navbar.css';

export default function Navbar(props) {

    const [pageTitle, setPageTitle] = useState("");

    useEffect(() => {
        updateTitle()
    }, [])

    function updateTitle() {
        switch (window.location.pathname) {
            case '/events':
                setPageTitle('Current Events');
                break;
            case '/dashboard':
                setPageTitle('User Dashboard');
                break;
            case '/create':
                setPageTitle('Create Event');
                break;
            default:
                setPageTitle('');
                break;
        }
    }
    
    const {globalUserName, setGlobalUserName} = useContext(UserContext);
    const {globalUserId, setGlobalUserId} = useContext(UserIdContext);

    function userLogOff() {
        setGlobalUserName("");
        setGlobalUserId("");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-fixed-top">
                <Link className='loggin-user' to='/dashboard'>{props.currentUser}</Link>
                <div className='page-title nav navbar-nav navbar-center'>{pageTitle}</div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto nav-padding">
                        <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Navigate
                            </p>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/dashboard">User Dashboard</Link>
                                <Link className="dropdown-item" to="/events">Current Events</Link>
                                <Link className="dropdown-item" to="/create">Create an Event</Link>
                                <Link className="dropdown-item" to="/" onClick={ () => userLogOff() }>Log Out</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}