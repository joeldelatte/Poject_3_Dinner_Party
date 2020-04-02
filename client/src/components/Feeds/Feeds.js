import React from 'react';
import Feed from './Feed/Feed';


export default function feeds(props) {
    function click(index) {
        console.log(index);
    }
    return props.events.map((event, index) => {
        return (

            <Feed
            click={() => click(index)}
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