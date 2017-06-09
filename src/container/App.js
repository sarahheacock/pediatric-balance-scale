import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AdminActionCreators from '../actions/admin';

//components
import Header from './Header';
import Footer from './Footer';
import Home from '../components/Home';
import Authors from '../components/Authors';
import Publications from '../components/Publications';
import News from '../components/News';
import Login from '../components/Login';
import NotFound from '../components/NotFound';

//var FontAwesome = require('react-fontawesome');
//import FaBeer from 'react-icons/fa/beer';


class App extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    modalVisible: PropTypes.bool.isRequired,
    admin: PropTypes.object.isRequired,
    errorMessage: PropTypes.object.isRequired
  }

  render(){
    const{ dispatch, data, modalVisible, admin, errorMessage } = this.props;
    //turns an object whose values are action creators (functions)
    //and wraps in dispatch (what causes state change)
    const makeModal = bindActionCreators(AdminActionCreators.makeModal, dispatch);
    const fetchBlog = bindActionCreators(AdminActionCreators.fetchBlog, dispatch);
    const verifyEmail = bindActionCreators(AdminActionCreators.verifyEmail, dispatch);

    console.log("data", data);
    console.log("modalVisible", modalVisible);
    console.log("admin", admin);
    console.log("errorMessage", errorMessage);

    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header
            admin={admin.admin}
          />


          <Switch>
            <Route exact path="/" render={ () => (
              <Home
                fetchBlog={fetchBlog}
                data={data.current}
              />) }
            />
            <Route path="/authors" render={ () => (
              <Authors
                fetchBlog={fetchBlog}
                data={data.current}
              />) }
            />

            <Route path="/news" render={ () => (
              <News
                fetchBlog={fetchBlog}
                data={data.current}
              />) }
            />
            <Route path="/publications" render={ () => (
              <Publications
                fetchBlog={fetchBlog}
                data={data.current}
              />) }
            />
            <Route path="/login" render={ () => (
              <Login
                errorMessage={errorMessage}
                admin={admin}
                verifyEmail={verifyEmail}
              />) }
            />

            <Route component={NotFound} />
          </Switch>

          <Footer />

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
    errorMessage: state.errorMessage
  }
);


export default connect(mapStateToProps)(App);
