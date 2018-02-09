import React from 'react';
import { notify } from 'react-notify-toast';
import PropTypes from 'prop-types';

const PreLoader = props => (
  <div className="card center-align">
    {!props.message ? '' : props.message}<br />
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
      <div className="spinner-layer spinner-red">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>

      <div className="spinner-layer spinner-yellow">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>

      <div className="spinner-layer spinner-green">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  </div>
);

PreLoader.propTypes = {
  message: PropTypes.string.isRequired,
};

const NotifierColors = {
    success: 'green',
    info: 'orange',
    danger: 'red',
    warning: 'deep-orange lighten-4',
};

export const YummyNotifier = (props) => {
    const { type, message } = props;
    return (
      <div className={`card-panel white-text ${NotifierColors[type]}`}>
        {message}
      </div>
    );
};

YummyNotifier.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string.isRequired,
};

YummyNotifier.defaultProps = {
    type: 'danger',
};

// generates a list of errors
export const Errors = ({ errors }) => (
  <ul>
    {
      errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))
    }
  </ul>
);

Errors.propTypes = {
  errors: PropTypes.array.isRequired,
};

// Object to house common error messages
export const errorMessages = {
  connection: "Request can't be made. Check your internet connection and try again",
};

export const displayError = (error) => {
  if (error.response) {
    const { data } = error.response;
    notify.show(<Errors errors={data.errors} />, 'error', 6000);
  } else if (error.request) {
      notify.show(errorMessages.connection, 'error', 5000);
  } else {
      notify.show(errorMessages.connection, 'error', 5000);
  }
};

export default PreLoader;

