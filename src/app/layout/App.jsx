import React, { useState } from "react";

import EventsDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventsDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
};

export default App;
