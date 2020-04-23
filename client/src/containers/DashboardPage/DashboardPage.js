import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { UserContext } from "../../utils/UserContext";
import { UserIdContext } from "../../utils/UserIdContext";
import './DashboardPage.css';
import YourEvents from '../../components/Dashboard/YourEvents';
import YourRSVPS from '../../components/Dashboard/YourRSVPS';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Heading from '../../components/Heading/Heading';
import API from "../../utils/API";


export default function DashboardPage() {

    const [rsvpEvents, setRsvpEvents] = useState([]);
    const [events, setEvents] = useState([]);
    const { globalUserName, setGlobalUserName } = useContext(UserContext);
    const { globalUserId, setGlobalUserId } = useContext(UserIdContext);

    useEffect(() => {
        const data1 = localStorage.getItem("globalUserName");
        if (data1) {
            setGlobalUserName(JSON.parse(data1));
        }
        const data2 = localStorage.getItem("globalUserId");
        if (data2) {
            setGlobalUserId(JSON.parse(data2));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("globalUserName", JSON.stringify(globalUserName));
        localStorage.setItem("globalUserId", JSON.stringify(globalUserId));
    });

    useLayoutEffect(() => {
        setTimeout(() => {
            loadEvents(globalUserId)
        }, 100);
        // return () => clearTimeout(timer);
    }, [globalUserId]);

    function loadEvents(UserId) {
        API.getEvent(UserId)
            .then(res =>
                setEvents(res.data)
            );

    };

    useEffect(() => {
        setTimeout(() => {
            loadRsvpEvents(globalUserId)
        }, 100);
        // return () => clearTimeout(timer);
    }, [globalUserId]);

    function loadRsvpEvents(UserId) {
        API.getRsvpEvents(UserId)
            .then(res =>
                setRsvpEvents(res.data)
            );
    };

    return (
        <div className='FeedPage'>
            <Navbar currentUser={globalUserName} />
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Heading>Your Events</Heading>
                        <YourEvents
                            className='feeds'
                            events={events} />
                    </div>
                    <div className='col'>
                        <Heading>Your RSVPs</Heading>
                        <YourRSVPS
                            className='YourEvents'
                            rsvps={rsvpEvents} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
