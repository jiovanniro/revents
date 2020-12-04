import cuid from "cuid";
import React, { useState } from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";

const EventForm = ({ setFormOpen, createEvent }) => {
  const initialValues = {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = () => {
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
      <Header content='Create new event' />
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
          onClick={(e) => setFormOpen(false)}
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
