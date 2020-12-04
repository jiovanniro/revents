import React, {useState} from 'react';

import { Grid } from 'semantic-ui-react';
import EventLists from './EventLists';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';

const EventsDashboard = ({formOpen, setFormOpen}) => {
    const [events, setEvents] = useState(sampleData);

    const handleCreateEvent = (e) => {
        console.log(e)
        setEvents([...events, e])
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventLists events={events}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && <EventForm setFormOpen={setFormOpen} setEvents={setEvents} createEvent={handleCreateEvent}/> }
            </Grid.Column>
        </Grid>
    )
}

export default EventsDashboard;