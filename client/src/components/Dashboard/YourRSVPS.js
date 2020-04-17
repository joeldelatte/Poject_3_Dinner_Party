import React from 'react';
import YourRSVP from './YourRSVP/YourRSVP';

const yourrsvps = (props) => {
    return props.rsvps.map((rsvp, index) => {
        return <YourRSVP
            click={() => props.clicked(index)}
            name={rsvp.Event.event_name}
            app={rsvp.Event.app}
            appdes={rsvp.Event.app_description}
            entree={rsvp.Event.entree}
            entreedes={rsvp.Event.entree_description}
            dessert={rsvp.Event.dessert}
            dessertdes={rsvp.Event.dessert_description}
            key={rsvp.Event.id}
        />
    });
};

export default yourrsvps;