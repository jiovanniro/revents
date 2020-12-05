import React, { useState } from "react";

import EventsDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectedEvent = (e) => {
    setSelectedEvent(e);
    setFormOpen(true);
  };

  const handleCreateFormOpen = (e) => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventsDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectedEvent}
          selectedEvent={selectedEvent}
        />
      </Container>
    </>
  );
};

export default App;
