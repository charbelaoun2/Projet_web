import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import {Provider} from "react-redux"
import store from "./app/store"

ReactDOM.render(
  <Provider store={store}>
    <App />,

  </Provider>,
  
  document.getElementById('root')
);


reportWebVitals();
