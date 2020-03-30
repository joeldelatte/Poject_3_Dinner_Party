import React, { Component } from 'react';
// import React, { useState } from "react";
import './DashboardPage.css';
import YourEvents from '../../components/Dashboard/YourEvents';
import YourRSVPS from '../../components/Dashboard/YourRSVPS';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Heading from '../../components/Heading/Heading';
// import API from "../../utils/API";


class DashboardPage extends Component {
    state = {
        events: [
            { id: '1', event_name: "Tad's Pizza Party", event_date: '2020-3-25', event_seats: '10', event_address: '3200 Duval Rd', event_city: 'Austin', event_state: 'Texas', event_zip: '78759', app: 'salad', app_description: 'app decription app decription app decription app decription app decription app decription', entree: 'sandwich', entree_description: 'entree description entree description entree description entree description entree description', dessert: 'cake', dessert_description: 'dessert description dessert description dessert description dessert description', UserId: '1' },
            { id: '2', event_name: "Tad's Hot Dog Party", event_date: '2020-3-25', event_seats: '10', event_address: '3200 Duval Rd', event_city: 'Austin', event_state: 'Texas', event_zip: '78759', app: 'salad', app_description: 'app decription app decription app decription app decription app decription app decription', entree: 'sandwich', entree_description: 'entree description entree description entree description entree description entree description', dessert: 'cake', dessert_description: 'dessert description dessert description dessert description dessert description', UserId: '2' },
            { id: '3', event_name: "Joel's Taco Party", event_date: '2020-3-25', event_seats: '10', event_address: '3200 Duval Rd', event_city: 'Austin', event_state: 'Texas', event_zip: '78759', app: 'salad', app_description: 'app decription app decription app decription app decription app decription app decription', entree: 'sandwich', entree_description: 'entree description entree description entree description entree description entree description', dessert: 'cake', dessert_description: 'dessert description dessert description dessert description dessert description', UserId: '3' }
        ]
    }

    render() {
        return (
            <div className='FeedPage'>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Heading>Your Events</Heading>
                            <YourEvents
                                className='YourEvents'
                                events={this.state.events} />
                        </div>
                        <div className='col'>
                            <Heading>Your RSVPs</Heading>
                            <YourRSVPS
                                className='YourEvents'
                                events={this.state.events} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default DashboardPage;

// const DashboardPage = () => {
//     const [eventsState] = useState(API.getEvents());
//     console.log(eventsState);

//     return (
//         <div className='FeedPage'>
//             <Navbar />
//             <YourEvents
//                 className='feeds'
//                 events={eventsState} />
//             <Footer />
//         </div>
//     )
// }

// export default DashboardPage;