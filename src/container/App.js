import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AdminActionCreators from '../actions/admin';

//components
import Header from './Header';
import Home from '../components/Home';
import Authors from '../components/Authors';
import Research from '../components/Research';
import Publications from '../components/Publications';
import News from '../components/News';
import Login from '../components/Login';
import NotFound from '../components/NotFound';

//var FontAwesome = require('react-fontawesome');
//import FaBeer from 'react-icons/fa/beer';
var FaLinked = require('react-icons/lib/fa/linkedin-square');
var FaFacebook = require('react-icons/lib/fa/facebook-square');

class App extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    modalVisible: PropTypes.bool.isRequired,
    admin: PropTypes.bool.isRequired
  }

  render(){
    const{ dispatch, data, modalVisible, admin } = this.props;
    //turns an object whose values are action creators (functions)
    //and wraps in dispatch (what causes state change)
    const makeModal = bindActionCreators(AdminActionCreators.makeModal, dispatch);
    const fetchBlog = bindActionCreators(AdminActionCreators.fetchBlog, dispatch);

    console.log("data", data);
    console.log("modalVisible", modalVisible);

    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header
            fetchBlog={fetchBlog}
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
            <Route path="/research" render={ () => (
              <Research
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
                fetchBlog={fetchBlog}
                data={data.current}
              />) }
            />

            <Route component={NotFound} />
          </Switch>
          <footer className="text-center"><h3>Around the Web</h3>
            <h3>
              <a className="icon" href="#">
                <FaLinked />
              </a>
              <a className="icon" href="#">
                <FaFacebook />
              </a>
            </h3>
          </footer>
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
  }
);


export default connect(mapStateToProps)(App);
