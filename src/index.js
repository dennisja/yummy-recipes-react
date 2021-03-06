import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <App />
  , document.getElementById('root'),
);

registerServiceWorker();

$(document).ready(() => {
  $('.button-collapse').sideNav();
});
