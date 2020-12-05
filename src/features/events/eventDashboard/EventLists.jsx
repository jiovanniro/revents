import React from 'react';
import EventListItem from './EventListItem';

/*
1. Display: EventListItem component - used to render each event. event, key, selectEvent, deleteEvent are passed as props
*/

const EventLists = ({events, selectEvent, deleteEvent}) => {
    return (
        <>
            {events.map((event) => {
                return <EventListItem event={event} key={event.id} selectEvent={selectEvent} deleteEvent={deleteEvent} />
            })}
        </>
    );
};

export default EventLists;