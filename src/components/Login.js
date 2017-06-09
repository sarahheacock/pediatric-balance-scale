import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Button, Form, FormControl, ControlLabel, FormGroup, Alert } from 'react-bootstrap';

class Login extends React.Component {
  static propTypes = {
    verifyEmail: PropTypes.func.isRequired,
    errorMessage: PropTypes.object.isRequired,
    admin: PropTypes.object.isRequired
  }

  constructor(props){
    super(props);
    this.state = {
      admin: props.admin,
      errorMessage: props.errorMessage,
      username: '',
      password: ''
    };
  }

  onFormChange = (e) => {
    this.state[e.target.name] = e.target.value;
    this.setState(this.state);
  }

  verify = (e) => {
    if(e) e.preventDefault();
    this.props.verifyEmail({username: this.state.username, password: this.state.password});
    this.state.username = '';
    this.state.password = '';
    this.setState(this.state);
  }

  render(){
    const alert = (Object.keys(this.props.errorMessage).length !== 0) ?
      <Alert className="content text-center" bsStyle="warning">{this.props.errorMessage.error}</Alert> :
      (this.props.admin.admin) ?
        <Alert className="content text-center" bsStyle="success">"Welcome, Nancy"</Alert>:
        <div></div>;

    const button = (this.props.admin.admin) ?
      <Button bsStyle="secondary">
        Logout
      </Button> :
      <Button bsStyle="primary" type="submit">
        Submit
      </Button>

    return (
      <div className="main-content">
        <PageHeader>Admin Login</PageHeader>
        <Form className="content" onSubmit={this.verify}>

          <FormGroup controlId="formInlineName">
            <ControlLabel>Username</ControlLabel>
            <FormControl name="username" type="text" value={this.state.username} onChange={this.onFormChange}/>
          </FormGroup>

          <FormGroup controlId="formInlineEmail">
            <ControlLabel>Password</ControlLabel>
            <FormControl name="password" type="password" value={this.state.password} onChange={this.onFormChange}/>
          </FormGroup>

          {alert}
          <div className="text-center">
            {button}
          </div>
        </Form>

      </div>
    );
  }
}

export default Login;
