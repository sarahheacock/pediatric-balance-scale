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
import About from '../components/About';
import Journals from '../components/Journals';
import Recent from '../components/Recent';
import Login from '../components/Login';
import NotFound from '../components/NotFound';


class App extends Component {
  static propTypes = {
    blog: PropTypes.array.isRequired,
    modalVisible: PropTypes.bool.isRequired
  }

  render(){
    const{ dispatch, blog, modalVisible } = this.props;
    //turns an object whose values are action creators (functions)
    //and wraps in dispatch (what causes state change)
    const makeModal = bindActionCreators(AdminActionCreators.makeModal, dispatch);
    const fetchBlog = bindActionCreators(AdminActionCreators.fetchBlog, dispatch);

    console.log("blog", blog);
    console.log("modalVisible", modalVisible);

    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header
            makeModal={makeModal}
          />


          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" render={ () => (
              <About

              />) }
            />
            <Route path="/recent" render={ () => (
              <Recent

              />) }
            />
            <Route path="/journal-articles" render={ () => (
              <Journals

              />) }
            />
            <Route path="/login" render={ () => (
              <Login

              />) }
            />

            <Route component={NotFound} />
          </Switch>
          <footer className="text-center">Contact us </footer>
        </div>

      </BrowserRouter>

    );
  }
}

const mapStateToProps = state => (
  {
    blog: state.blog,
    modalVisible: state.modalVisible,
  }
);


export default connect(mapStateToProps)(App);
