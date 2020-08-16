import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/App'

// to use redux in react
import {Provider} from 'react-redux';

// redux store (we will serve the store as props for all the app)
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById("root"));

