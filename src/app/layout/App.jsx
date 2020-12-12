import React from "react";
import { Container } from "semantic-ui-react";
import { Route, useLocation } from "react-router-dom";

import NavBar from "../../features/nav/NavBar";
import HomePage from "../../features/home/HomePage";
import EventsDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetail from "../../features/events/eventDetail/EventDetailPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Sandbox from "../playground/Sandbox";

/*
1. Function: handleSelectedEvent - event is passed as an argument, then the state is updated and the form is opened with the event details
2. Function: handleCreateFormOpen - event event state is set to null and the form is opened with cleared inputs
3. Display: NavBar component - setFormOpen is passed down as a prop
4. Display: Container component - the semantic-ui-react component is used as a wrapper for the EventsDashbaord component
5. Display: EventsDashboard component - formOpen, setFormOpen, selectEvent, and selectedEvent are passed down as a prop
*/

const App = () => {
  const {key} = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={EventsDashboard} />
              <Route exact path={['/events/create', '/events/manage/:id']} component={EventForm} key={key} />
              <Route exact path='/events/view/:id' component={EventDetail} />
              <Route exact path='/sandbox' component={Sandbox} />
            </Container>
          </>
        )}
      />
    </>
  );
};

export default App;
