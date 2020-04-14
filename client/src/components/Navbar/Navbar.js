import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function navbar(props) {

    // const [pageTitle, setPageTitle] = useState([]);

    // useEffect(() => {
    //     updateTitle()
    // }, [])

    // function updateTitle() {
    //     if (window.location.pathname = '/events') {
    //         setPageTitle('Current Events')
    //     }
    //     if (window.location.pathname = '/dashboard') {
    //         setPageTitle('User Dashboard')
    //     }
    //     if (window.location.pathname = '/create') {
    //         setPageTitle('Create Event')
    //     }
    // }

    // function updateTitle() {
    //     if (window.location.pathname = '/events') {
    //         return ('Current Events')
    //     }
    //     if (window.location.pathname = '/dashboard') {
    //         return ('User Dashboard')
    //     }
    //     if (window.location.pathname = '/create') {
    //         return ('Create Event')
    //     }
    // }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-fixed-top">
                <Link className='loggin-user' to='/dashboard'>{props.currentUser}</Link>
                <div className='page-title nav navbar-nav navbar-center'>Testing</div>
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
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}