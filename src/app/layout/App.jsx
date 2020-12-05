import React, { useState } from "react";

import EventsDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";

/*
1. Function: handleSelectedEvent - event is passed as an argument, then the state is updated and the form is opened with the event details
2. Function: handleCreateFormOpen - event event state is set to null and the form is opened with cleared inputs
3. Display: NavBar component - setFormOpen is passed down as a prop
4. Display: Container component - the semantic-ui-react component is used as a wrapper for the EventsDashbaord component
5. Display: EventsDashboard component - formOpen, setFormOpen, selectEvent, and selectedEvent are passed down as a prop
*/

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
