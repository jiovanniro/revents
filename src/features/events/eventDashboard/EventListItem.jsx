import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

import { deleteEvent } from "../eventActions";
/*
1. Display: Segment component - the semantic-ui-react component is used to provide group / card like layout for the event details
2. Display: Button component - the semantic-ui-react component is used display a button that will be used for viewing and deleting the event
*/

const EventListItem = ({ event }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Segment.Group style={{ marginBottom: "0.2rem" }} className='event'>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header content={event.title} />
                <Item.Description>Hosted by {event.hostedBy}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name='clock' /> {event.date}
            <Icon name='marker' /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map((attendee) => {
                return (
                  <EventListAttendee attendee={attendee} key={attendee.id} />
                );
              })}
          </List>
        </Segment>
        <Segment clearing>
          <div>{event.description}</div>
          <Button
            color='red'
            floated='right'
            content='Delete'
            onClick={() => dispatch(deleteEvent(event.id))}
          />
          <Button
            as={Link}
            to={`/events/view/${event.id}`}
            color='teal'
            floated='right'
            content='View'
          />
        </Segment>
      </Segment.Group>
    </>
  );
};

export default EventListItem;
