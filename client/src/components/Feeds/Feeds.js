import React, { useContext, useEffect } from 'react';
import Feed from './Feed/Feed';
import API from "../../utils/API";
import { UserIdContext } from "../../utils/UserIdContext";


export default function Feeds(props) {

    const { globalUserId, setGlobalUserId } = useContext(UserIdContext);

    function click(event) {

        API.postRsvp({
            UserId: globalUserId,
            EventId: event.id,
            // event_seats: eventSeats
        })
            .then(res => console.log(res.data));
    }

    useEffect(()=> {
        const data = localStorage.getItem("globalUserId");
        if (data) {
            setGlobalUserId(JSON.parse(data));
        }
    }, []);

    useEffect(()=> {
        localStorage.setItem("globalUserId", JSON.stringify(globalUserId));
    });


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