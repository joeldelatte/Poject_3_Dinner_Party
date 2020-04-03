import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../../utils/UserContext";
import './DashboardPage.css';
import YourEvents from '../../components/Dashboard/YourEvents';
import YourRSVPS from '../../components/Dashboard/YourRSVPS';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Heading from '../../components/Heading/Heading';
import API from "../../utils/API";


export default function DashboardPage() {

    const [events, setEvents] = useState([]);
    const [usernameId, setUsernameId] = useState([]);
    const { globalUserName } = useContext(UserContext);

    
    function loadUser(username) {
        API.getUsername(username)
            .then(res =>
                setUsernameId(res.data)
            )
            .catch(err => console.log(err));
    };

    //loadEvents works if you hard code a UserId number in parenthesis
    //somehow, I need to get the global user id into these parenthesis.  It worked on the create page, but can't get it to work on this page...
    useEffect(() => {
        loadEvents(loadUser(globalUserName))
      }, [])

    function loadEvents(UserId) {
        API.getEvent(UserId)
            .then(res =>
                setEvents(res.data)
            )
            .catch(err => console.log(err));
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
                            events={events} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
