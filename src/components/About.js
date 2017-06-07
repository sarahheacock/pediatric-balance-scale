import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Nav, NavItem, Tab, Row, Col, PageHeader } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


import MaryRose from './aboutTabs/MaryRose';
import Nancy from './aboutTabs/Nancy';

const About = () => (
  <div className="main-content">
    <PageHeader>About Us</PageHeader>
    <div className="text-center">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="clearfix">


          <Nav bsStyle="tabs">
            <LinkContainer to="/about/nancy">
              <NavItem className="tab">Nancy Darr</NavItem>
            </LinkContainer>
            <LinkContainer to="/about/mary-rose">
              <NavItem className="tab">Mary Rose</NavItem>
            </LinkContainer>
          </Nav>


          <Route exact path="/about/" render={ () =>
            <Redirect to="/about/nancy" /> }
          />
          <Route path="/about/nancy" render={ () =>
            <Nancy
            /> }
          />

          <Route path="/about/mary-rose" render={ () =>
            <MaryRose
            /> }
          />

      </Row>
      </Tab.Container>
      </div>
  </div>
);

export default About;
