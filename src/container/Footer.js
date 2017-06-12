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
      admin={props.admin}
    />
    <EditModal
      makeModal={props.makeModal}
      editVisible={props.editVisible}
      selectedEdit={props.selectedEdit}
      editBlog={props.editBlog}
      errorMessage={props.errorMessage}
      admin={props.admin}
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
          <a className="icon" href="#" onClick={(e) => {if(e) e.preventDefault(); window.open("https://www.linkedin.com/in/nancy-darr-968364b");}}>
            <FaLinked className="link falinked" />
          </a>
          <a className="icon" href="#">
            <FaFacebook className="link fafacebook" />
          </a>
        </h3>
      </Col>
      <Col sm={6}>
        <h3>Get More Info</h3>
        <h3>
          <a href="#" onClick={() => props.makeModal({"message": true})}>
            <FaEmail className="link faemail" />
          </a>
        </h3>
      </Col>
    </Row>
  </footer>

);

//<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>


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
  addBlog: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired
};
