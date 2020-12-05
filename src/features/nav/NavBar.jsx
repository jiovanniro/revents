import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

/*
1. Display: Menu component - the semantic-ui-react component is used to wrap the navbar menu items
2. Display: Container component - the semantic-ui-react component is used to wrapper to help position the menu items
3. Display: Button component - the semantic-ui-react component is used display a button that will be used for sign in and registration
*/

const NavBar = ({ setFormOpen }) => {
  const [auth, setAuth] = useState(false);
  const history = useHistory();

  const handleSignOut = () => {
    setAuth(false);
    history.push('/');
  }

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item
          as={NavLink}
          exact
          to='/'
          header
          style={{ marginRight: "0.5rem" }}
        >
          <img
            src='/assets/logo.png'
            alt='revents logo'
            style={{ marginRight: "15px" }}
          />
          Revents
        </Menu.Item>
        <Menu.Item as={NavLink} exact to='/events' name='Events' />
        {auth && (
          <Menu.Item as={NavLink} exact to='/events/create'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}

        {auth ? (
          <SignedInMenu signOut={handleSignOut}/>
        ) : (
          <SignedOutMenu setAuth={setAuth} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
