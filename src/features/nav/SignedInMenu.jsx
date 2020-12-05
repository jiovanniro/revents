import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Image } from 'semantic-ui-react';

const SignedInMenu = ({signOut}) => {
    return (
        <>
        <Menu.Item position='right'>
            <Image avatar spaced='right' src='/assets/user.png' />
            <Dropdown>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/events/create' text='Create Event' icon='plus' />
                    <Dropdown.Item text='My Profile' icon='user' />
                    <Dropdown.Item text='Sign out' icon='power' onClick={() => signOut()} />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
      </>
    );
};

export default SignedInMenu;