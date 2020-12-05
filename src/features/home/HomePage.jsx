import React from 'react';
import { Container, Header, Segment, Image, Button, Icon } from 'semantic-ui-react';

const HomePage = ({history}) => {
    return (
        <Segment inverted textAlign='center' vertical className='homepage'>
            <Container>
                <Header as='h1' inverted className='homepage__header'>
                    <Image size='massive' src='/assets/logo.png' style={{marginBottom: 12}} />
                    Revents
                </Header>
                <Button onClick={() => history.push('/events')} size='huge' inverted>
                    Get started
                    <Icon name='right arrow'/>
                </Button>
            </Container>
        </Segment>
    );
};

export default HomePage;