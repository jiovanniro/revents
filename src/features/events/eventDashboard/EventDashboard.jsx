import React, { useState } from "react";

import { Grid } from "semantic-ui-react";
import EventLists from "./EventLists";
import EventForm from "../eventForm/EventForm";
import { sampleData } from "../../../app/api/sampleData";

/*
1. Function: handleCreateEvent - event is passed as an argument, then the state is updated to include the new state
1. Function: handleUpdateEvent - event is passed as an argument, then the state is updated to reflect the changes, selectEvent is set to null and form is closed
3. Display: Grid component - the semantic-ui-react component is used to provide a grid layout (grid of 16)
4. Display: EventLists component - events, selectEvent, and deleteEvent are passed down as a prop
5. Display: EventForm component - setFormOpen, setEvents, createEvent, selectedEvent, and updateEvent are passed down as a prop
*/

const EventsDashboard = ({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) => {
  const [events, setEvents] = useState(sampleData);

  const handleCreateEvent = (e) => {
    setEvents([...events, e]);
  };

  const handleUpdateEvent = (updatedEvent) => {
      setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
      selectEvent(null);
      setFormOpen(false);
  }

  const handleDeleteEvent = (eventID) => {
    setEvents(events.filter(evt => evt.id !== eventID));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventLists events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            updateEvent={handleUpdateEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventsDashboard;
