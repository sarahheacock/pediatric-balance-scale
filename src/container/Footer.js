import React from 'react';
import { Col, Row } from 'react-bootstrap';
var FaLinked = require('react-icons/lib/fa/linkedin-square');
var FaFacebook = require('react-icons/lib/fa/facebook-square');
var FaEmail = require('react-icons/lib/fa/envelope');

const Footer = () => (
  <footer className="text-center">
    <Row className="clearfix content">
      <Col sm={6}>
        <h3>Around the Web</h3>
        <h3>
          <a className="icon" href="https://www.linkedin.com/in/nancy-darr-968364b">
            <FaLinked className="link" color={"#0077B5"} />
          </a>
          <a className="icon" href="#">
            <FaFacebook className="link" color={"#3b5998"}/>
          </a>
        </h3>
      </Col>
      <Col sm={6}>
        <h3>Contact Us</h3>
        <h3>
          <a href="#">
            <FaEmail color={"4099FF"}/>
          </a>
        </h3>
      </Col>
    </Row>
  </footer>
);

export default Footer;
