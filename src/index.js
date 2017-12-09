import $ from 'jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


$(document).ready(() => {
    $('.button-collapse').sideNav();
    $('select').material_select();
});

ReactDOM.render(
  <App />
, document.getElementById('root'),
);

registerServiceWorker();
