import React from 'react';
import Feed from './Feed/Feed';
import API from "../../utils/API";


export default function feeds(props) {

    function click(event) {

        API.postRsvp({
            UserId: event.UserId,
            EventId: event.id,
            // event_seats: eventSeats
        })
            .then(res => console.log(res.data));

        console.log(event.UserId);
        console.log(event.id);
    }


    return props.events.map((event) => {
        return <Feed
            click={() => click(event)}
            name={event.event_name}
            app={event.app}
            appdes={event.app_description}
            entree={event.entree}
            entreedes={event.entree_description}
            dessert={event.dessert}
            dessertdes={event.dessert_description}
            key={event.id}
        />
    });
};