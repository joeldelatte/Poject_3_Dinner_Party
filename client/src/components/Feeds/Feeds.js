import React, { useContext, useEffect, useState } from 'react';
import Feed from './Feed/Feed';
import API from "../../utils/API";
import { UserIdContext } from "../../utils/UserIdContext";


export default function Feeds(props) {

    const { globalUserId, setGlobalUserId } = useContext(UserIdContext);
    const [seats, setSeats] = useState("");

    function callbackFunction(childData) {
        setSeats(parseInt(childData))
    }

    function click(event) {

        API.postRsvp({
            UserId: globalUserId,
            EventId: event.id,
            rsvp_seats: seats
        })
            .then(res => console.log(res.data));
    }

    useEffect(() => {
        const data = localStorage.getItem("globalUserId");
        if (data) {
            setGlobalUserId(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("globalUserId", JSON.stringify(globalUserId));
    });

    return props.events.map((event) => {
        return <Feed
            click={() => click(event)}
            parentCallback={callbackFunction}
            state={seats}
            name={event.event_name}
            date={event.event_date}
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