import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import axios from 'axios';

import AdminReducer from './reducers/admin';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './stylesheets/index.css';

//import registerServiceWorker from './registerServiceWorker';


//=============================================================\
const data = {current: []};
const initialState = {
  data: data,
  modalVisible: {
    add: false,
    edit: false,
    message: false
  },
  messageSent: false,
  //CHANGE BACK LATER
  admin: {admin: false, id: {}},
  errorMessage: {},
  selectedEdit: {
    data: {},
    section: ""
  },
  selectedAdd: {
    data: {},
    section: ""
  }
};

const store = createStore(
  AdminReducer, initialState, applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//registerServiceWorker();
