import React from 'react';

import { Grid } from 'semantic-ui-react';
import EventLists from './EventLists';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';

const EventsDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventLists events={sampleData}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <EventForm />
            </Grid.Column>
        </Grid>
    )
}

export default EventsDashboard;