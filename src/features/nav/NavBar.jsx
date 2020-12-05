import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';

/*
1. Display: Menu component - the semantic-ui-react component is used to wrap the navbar menu items
2. Display: Container component - the semantic-ui-react component is used to wrapper to help position the menu items
3. Display: Button component - the semantic-ui-react component is used display a button that will be used for sign in and registration
*/

const NavBar = ({setFormOpen}) => {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header style={{marginRight: '0.5rem'}}>
                    <img src="/assets/logo.png" alt="revents logo" style={{marginRight: '15px'}}/>
                    Revents
                </Menu.Item>
                <Menu.Item as={NavLink} exact to='/events' name='Events'/>
                <Menu.Item as={NavLink} exact to='/events/create'>
                    <Button positive inverted content='Create Event' />
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