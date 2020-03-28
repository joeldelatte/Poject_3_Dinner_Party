import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-fixed-top">
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