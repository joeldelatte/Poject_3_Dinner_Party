import React from 'react';
import YourEvent from './YourEvent/YourEvent';

const yourevents = (props) => {
    return props.events.map((event, index) => {
        return <YourEvent
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

export default yourevents;