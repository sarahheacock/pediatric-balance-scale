import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, FormControl, ControlLabel, FormGroup, Alert } from 'react-bootstrap';

class EditModal extends React.Component {
  static propTypes = {
    editVisible: PropTypes.bool.isRequired,
    makeModal: PropTypes.func.isRequired,
    selectedEdit: PropTypes.object.isRequired,
    editBlog: PropTypes.func.isRequired,
    errorMessage: PropTypes.object.isRequired,
  }

  constructor(props){
    super(props);

    this.state = {
      input: props.selectedEdit.data,
      section: props.selectedEdit.section,
      sectionID: props.selectedEdit.data._id
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedEdit.data !== undefined) {
      this.setState({
        input: nextProps.selectedEdit.data,
        section: nextProps.selectedEdit.section,
        sectionID: nextProps.selectedEdit.data._id
      });
    }
  }

  onFormChange = (e) => {
    let value = e.target.value;
    this.state.input[e.target.name] = value;
    this.setState(this.state);
  }

  send = (e) => {
    if(e) e.preventDefault();
    let results = {};
    (Object.keys(this.state.input)).forEach((k) => {
      if(k === "carousel") results[k] = this.state["input"][k].split(',');
      else if(k !== "_id") results[k] = this.state["input"][k]
    });
    this.props.editBlog({...this.state, input:results});
  }

  pop = (e) => {
    this.props.makeModal({"edit": false});
  }

  render(){
    const alert = (Object.keys(this.props.errorMessage).length !== 0) ?
      <Alert className="content text-center alertMessage" bsStyle="warning">{this.props.errorMessage.error}</Alert> :
      <div></div>;

    const formItems = (this.state.input === undefined) ?
      <div></div>:
      (Object.keys(this.state.input)).map((k, index) => {
        //let value =
        if(k !== "_id") {
          return (
            <FormGroup key={`formgroup${index}`}>
              <ControlLabel>{k}</ControlLabel>
              <FormControl componentClass="Textarea"
                name={k}
                type="text"
                value={
                  this.state["input"][k]
                }
                onChange={this.onFormChange}
              />
            </FormGroup>
          );
        }
      });

    return (
      <div>
        <Modal show={this.props.editVisible}>
          <Modal.Header>
            <Modal.Title>Edit Content</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form className="content" onSubmit={this.send}>
              {formItems}
              <div className="text-center">
                {alert}
                <Button className="edit" bsStyle="primary" type="submit">
                  Submit
                </Button>
                <Button className="edit" bsStyle="danger" onClick={this.pop}>
                  Cancel
                </Button>
              </div>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            *Fill out required fields
            <br />
            Make sure lists are only separated by commas
            <br />
            Empty fields will be filled with default text
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditModal;
