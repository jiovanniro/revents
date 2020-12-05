import cuid from "cuid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Form, Button } from "semantic-ui-react";

/*
1. Function: handleFormSubmit - if a current event was selected then display the event details, otherwise display an empty form
2. Function: handleInputChange - used to track changes made in the input fields. event is passed as an argument, then the state is updated to include the changes made
3. Display: Form component - the semantic-ui-react component is used to provide a form element on the page
*/

const EventForm = ({ createEvent, selectedEvent, updateEvent }) => {

  //null conditional operator
  //set values to selectedEvent if its not null
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = () => {
    //if there is a selectedEvent then we'll update the event otherwise, we'll create a new event
    selectedEvent ? updateEvent({...selectedEvent, ...values}) :
    createEvent({
      ...values,
      id: cuid(),
      hostedBy: 'Jose',
      attendee: [],
      hostPhotoURL: '/assets/user.png',
    });
  };

  const handleInputChange = (e) => {
    //get the name name and value from the target
    const { name, value } = e.target;

    //copy all of the current values and for the one that matches the name, update the value
    setValues({ ...values, [name]: value });
  };

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event': 'Create new event' } />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            name='title'
            placeholder='Event Title'
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='category'
            placeholder='Category'
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='city'
            placeholder='City'
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='venue'
            placeholder='Venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            name='date'
            placeholder='Date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          as={Link} to='/events'
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
