import React, { useContext, useState } from 'react';
import { UserContext } from "../../utils/UserContext";
import './DashboardPage.css';
import YourEvents from '../../components/Dashboard/YourEvents';
import YourRSVPS from '../../components/Dashboard/YourRSVPS';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Heading from '../../components/Heading/Heading';
import API from "../../utils/API";


export default function DashboardPage() {

    const {globalUserName, setGlobalUserName} = useContext(UserContext);
    const eventsState = useState(API.getEvent());
    console.log(eventsState);

    return (
        <div className='FeedPage'>
            <Navbar currentUser={globalUserName} />
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Heading>Your Events</Heading>
                        <YourEvents
                            className='feeds'
                            events={eventsState} />
                    </div>
                    <div className='col'>
                        <Heading>Your RSVPs</Heading>
                        <YourRSVPS
                            className='YourEvents'
                            events={eventsState} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
