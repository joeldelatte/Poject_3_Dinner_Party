import React from 'react';
import Feed from './Feed/Feed';

export default function Feeds(props) {

    function click(event) {
        console.log(event);
    }
    return props.events.map((event, index) => {
        return (

            <Feed
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
        )
    });
};