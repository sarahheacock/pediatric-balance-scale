import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AdminActionCreators from '../actions/admin';

//components
import Routes from './Routes';
import Header from './Header';
import Footer from './Footer';



//var FontAwesome = require('react-fontawesome');
//import FaBeer from 'react-icons/fa/beer';


class App extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    modalVisible: PropTypes.object.isRequired,
    admin: PropTypes.object.isRequired,
    errorMessage: PropTypes.object.isRequired,
    messageSent: PropTypes.bool.isRequired,
    selectedEdit: PropTypes.object.isRequired,
    selectedAdd: PropTypes.object.isRequired
  }

  render(){
    const{ dispatch, data, modalVisible, admin, errorMessage, messageSent, selectedEdit, selectedAdd } = this.props;
    //turns an object whose values are action creators (functions)
    //and wraps in dispatch (what causes state change)
    const makeModal = bindActionCreators(AdminActionCreators.makeModal, dispatch);
    const fetchBlog = bindActionCreators(AdminActionCreators.fetchBlog, dispatch);
    const verifyEmail = bindActionCreators(AdminActionCreators.verifyEmail, dispatch);
    const sendMessage = bindActionCreators(AdminActionCreators.sendMessage, dispatch);
    const editBlog = bindActionCreators(AdminActionCreators.editBlog, dispatch);
    const addBlog = bindActionCreators(AdminActionCreators.addBlog, dispatch);
    const deleteBlog = bindActionCreators(AdminActionCreators.deleteBlog, dispatch);
    const selectEdit = bindActionCreators(AdminActionCreators.selectEdit, dispatch);
    const selectAdd = bindActionCreators(AdminActionCreators.selectAdd, dispatch);
    const logout = bindActionCreators(AdminActionCreators.logout, dispatch);


    console.log("data", data);
    console.log("modalVisible", modalVisible);
    console.log("admin", admin);
    console.log("errorMessage", errorMessage);
    console.log("messageSent", messageSent);
    console.log("selectedEdit", selectedEdit);
    console.log("selectedAdd", selectedAdd);

    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header
            admin={admin.admin}
          />

          <Routes
            fetchBlog={fetchBlog}
            data={data.current}
            admin={admin}
            selectEdit={selectEdit}
            selectAdd={selectAdd}
            deleteBlog={deleteBlog}
            errorMessage={errorMessage}
            verifyEmail={verifyEmail}
            logout={logout}
          />

          <Footer
            visible={modalVisible.message}
            makeModal={makeModal}
            sendMessage={sendMessage}
            messageSent={messageSent}
            editVisible={modalVisible.edit}
            selectedEdit={selectedEdit}
            selectedAdd={selectedAdd}
            editBlog={editBlog}
            errorMessage={errorMessage}
            addVisible={modalVisible.add}
            addBlog={addBlog}
            admin={admin}
          />
        </div>

      </BrowserRouter>

    );
  }
}

const mapStateToProps = state => (
  {
    data: state.data,
    admin: state.admin,
    modalVisible: state.modalVisible,
    errorMessage: state.errorMessage,
    messageSent: state.messageSent,
    selectedEdit: state.selectedEdit,
    selectedAdd: state.selectedAdd
  }
);


export default connect(mapStateToProps)(App);
