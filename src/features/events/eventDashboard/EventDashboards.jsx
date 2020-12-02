import React from 'react';

import { Grid } from 'semantic-ui-react';
import EventLists from './EventLists';

const EventsDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventLists />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Right column</h2>
            </Grid.Column>
        </Grid>
    )
}

export default EventsDashboard;