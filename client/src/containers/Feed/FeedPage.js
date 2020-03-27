import React, {Component} from 'react';
// import React, { useState, useEffect } from "react";
import './FeedPage.css';
import Feeds from '../../components/Feeds/Feeds';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
// import API from "../../utils/API";


class FeedPage extends Component {
    state = {
        events: [
            { id: '1', event_name: "Tad's Pizza Party", event_date: '2020-3-25', event_seats: '10', event_address: '3200 Duval Rd', event_city: 'Austin', event_state: 'Texas', event_zip: '78759', app: 'salad', app_description: 'app decription app decription app decription app decription app decription app decription', entree: 'sandwich', entree_description: 'entree description entree description entree description entree description entree description', dessert: 'cake', dessert_description: 'dessert description dessert description dessert description dessert description', user_id: '1' },
            { id: '2', event_name: "Tad's Hot Dog Party", event_date: '2020-3-25', event_seats: '10', event_address: '3200 Duval Rd', event_city: 'Austin', event_state: 'Texas', event_zip: '78759', app: 'salad', app_description: 'app decription app decription app decription app decription app decription app decription', entree: 'sandwich', entree_description: 'entree description entree description entree description entree description entree description', dessert: 'cake', dessert_description: 'dessert description dessert description dessert description dessert description', user_id: '2' },
            { id: '3', event_name: "Joel's Taco Party", event_date: '2020-3-25', event_seats: '10', event_address: '3200 Duval Rd', event_city: 'Austin', event_state: 'Texas', event_zip: '78759', app: 'salad', app_description: 'app decription app decription app decription app decription app decription app decription', entree: 'sandwich', entree_description: 'entree description entree description entree description entree description entree description', dessert: 'cake', dessert_description: 'dessert description dessert description dessert description dessert description', user_id: '3' }
        ]
    }

    render() {
        return (
            <div className='FeedPage'>
                <Navbar />
                <Feeds
                    className='feeds'
                    events={this.state.events} />
                {/* clicked={} /> */}
                <Footer />
            </div>
        )
    }
}

export default FeedPage;

// function FeedPage() {
//     // Setting our component's initial state
//     const [events, setEvents] = useState([])

//     // Load all events and store them with setEvents
//     useEffect(() => {
//         loadEvents()
//     }, [])

//     // Loads all events and sets them to events
//     function loadEvents() {
//         API.getEvents()
//             .then(res =>
//                 setEvents(res.data)
//             )
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className='FeedPage'>
//             <Navbar />
//             <Feeds
//                 className='feeds'
//                 events={events} />
//             {/* clicked={} /> */}
//             <Footer />
//         </div>
//     )
// }

// export default FeedPage;