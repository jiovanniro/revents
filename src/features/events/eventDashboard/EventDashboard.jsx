import React from "react";

import { Grid } from "semantic-ui-react";
import EventLists from "./EventLists";
import { useSelector } from "react-redux";

/*
1. Function: handleCreateEvent - event is passed as an argument, then the state is updated to include the new state
1. Function: handleUpdateEvent - event is passed as an argument, then the state is updated to reflect the changes, selectEvent is set to null and form is closed
3. Display: Grid component - the semantic-ui-react component is used to provide a grid layout (grid of 16)
4. Display: EventLists component - events, selectEvent, and deleteEvent are passed down as a prop
5. Display: EventForm component - setFormOpen, setEvents, createEvent, selectedEvent, and updateEvent are passed down as a prop
*/

const EventsDashboard = () => {
  const { events } = useSelector((state) => state.events_reducer);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventLists events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventsDashboard;
