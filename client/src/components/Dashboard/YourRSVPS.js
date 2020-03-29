import React from 'react';
import YourRSVP from './YourRSVP/YourRSVP';

const yourrsvps = (props) => {
    return props.events.map((event, index) => {
        return <YourRSVP
            click={() => props.clicked(index)}
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

export default yourrsvps;