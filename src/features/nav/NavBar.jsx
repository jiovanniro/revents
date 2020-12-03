import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

const NavBar = ({setFormOpen}) => {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header style={{marginRight: '0.5rem'}}>
                    <img src="/assets/logo.png" alt="revents logo" style={{marginRight: '15px'}}/>
                    Revents
                </Menu.Item>
                <Menu.Item name='Events'/>
                <Menu.Item>
                    <Button onClick={(e) => setFormOpen(true) } positive inverted content='Create Event' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Sign in' />
                    <Button basic inverted content='Register' style={{marginLeft: '0.5rem'}}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar;