import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventDetailChat from './EventDetailChat';
import EventDetailHeader from './EventDetailHeader';
import EventDetailInfo from './EventDetailInfo';
import EventDetailSidebar from './EventDetailSidebar';

const EventDetailPage = ({match}) => {

    const event = useSelector(state => state.events_reducer.events.find(e => e.id === match.params.id))
    return (
        <div>
            <Grid>
                <Grid.Column width={10}>
                    <EventDetailHeader event={event} />
                    <EventDetailInfo event={event} />
                    <EventDetailChat event={event} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <EventDetailSidebar attendees={event.attendees} />
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default EventDetailPage;