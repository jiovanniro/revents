import React from "react";
import { Segment, Item } from "semantic-ui-react";

const EventDetailSidebar = ({ attendees }) => {
  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: "none" }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {attendees && attendees.length > 0
          ? `${attendees.length} People Going`
          : `${attendees.length} Person Going`}
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {attendees &&
            attendees.map((attendee) => {
              return (
                <Item key={attendee.id} style={{ position: "relative" }}>
                  <Item.Image
                    size='tiny'
                    src={attendee.photoURL || "/assets/user.png"}
                  />
                  <Item.Content verticalAlign='middle'>
                    <Item.Header as='h3'>
                      <span>{attendee.name}</span>
                    </Item.Header>
                  </Item.Content>
                </Item>
              );
            })}
        </Item.Group>
      </Segment>
    </>
  );
};

export default EventDetailSidebar;
