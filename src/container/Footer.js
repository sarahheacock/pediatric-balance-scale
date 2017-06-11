import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import MessageModal from '../components/modals/MessageModal';
import EditModal from '../components/modals/EditModal';
import AddModal from '../components/modals/AddModal';
var FaLinked = require('react-icons/lib/fa/linkedin-square');
var FaFacebook = require('react-icons/lib/fa/facebook-square');
var FaEmail = require('react-icons/lib/fa/envelope');

const Footer = (props) => (
  <footer className="text-center content">
    <AddModal
      addVisible={props.addVisible}
      makeModal={props.makeModal}
      addBlog={props.addBlog}
      errorMessage={props.errorMessage}
      selectedAdd={props.selectedAdd}
    />
    <EditModal
      makeModal={props.makeModal}
      editVisible={props.editVisible}
      selectedEdit={props.selectedEdit}
      editBlog={props.editBlog}
      errorMessage={props.errorMessage}
    />
    <MessageModal
      visible={props.visible}
      makeModal={props.makeModal}
      sendMessage={props.sendMessage}
      messageSent={props.messageSent}
      errorMessage={props.errorMessage}
    />
    <Row className="clearfix">
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
        <h3>Get More Info</h3>
        <h3>
          <a href="#" onClick={() => props.makeModal({"message": true})}>
            <FaEmail color={"4099FF"}/>
          </a>
        </h3>
      </Col>
    </Row>
  </footer>

);

export default Footer;

Footer.propTypes = {
  visible: PropTypes.bool.isRequired,
  makeModal: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  messageSent: PropTypes.bool.isRequired,
  selectedAdd: PropTypes.string.isRequired,
  errorMessage: PropTypes.object.isRequired,
  selectedEdit: PropTypes.object.isRequired,
  editVisible: PropTypes.bool.isRequired,
  addVisible: PropTypes.bool.isRequired,
  editBlog: PropTypes.func.isRequired,
  addBlog: PropTypes.func.isRequired
};
