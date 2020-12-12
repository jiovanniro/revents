import React from "react";
import { List, Image } from "semantic-ui-react";

/*
1. Display: List component - the semantic-ui-react component is used to provide a list of the attendee images
*/
const EventListAttendee = ({ attendee }) => {
  return (
    <List.Item>
      <Image size='mini' circular src={attendee.photoURL} />
    </List.Item>
  );
};

export default EventListAttendee;
