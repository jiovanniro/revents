import React, {useState} from 'react';

import { Grid } from 'semantic-ui-react';
import EventLists from './EventLists';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';

const EventsDashboard = ({formOpen, setFormOpen}) => {
    const [events, setEvents] = useState(sampleData);

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventLists events={sampleData}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && <EventForm setFormOpen={setFormOpen} /> }
            </Grid.Column>
        </Grid>
    )
}

export default EventsDashboard;