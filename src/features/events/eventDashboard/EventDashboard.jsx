import React, { useState } from "react";

import { Grid } from "semantic-ui-react";
import EventLists from "./EventLists";
import EventForm from "../eventForm/EventForm";
import { sampleData } from "../../../app/api/sampleData";

const EventsDashboard = ({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) => {
  const [events, setEvents] = useState(sampleData);

  const handleCreateEvent = (e) => {
    console.log(e);
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
