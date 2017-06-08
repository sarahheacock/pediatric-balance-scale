import React from 'react';
import PropTypes from 'prop-types';

import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//navigation bar
const Header = (props) => {

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              {"PBS"}
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav className="ml-auto" onSelect={props.makeModal} navbar>

              <LinkContainer exact to="/"  >
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>Authors</NavItem>
              </LinkContainer>
              <LinkContainer to="/journal-articles">
                <NavItem>Publications</NavItem>
              </LinkContainer>

              <LinkContainer to="/recent">
                <NavItem>News</NavItem>
              </LinkContainer>

            </Nav>
            <Nav pullRight>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default Header;

Header.propTypes = {
  login: PropTypes.object.isRequired
}
