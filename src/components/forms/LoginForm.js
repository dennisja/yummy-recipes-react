import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {notify} from 'react-notify-toast';

import axios from 'axios';
import Configs from "../../configs/Configs"
import {errorMessages, Errors } from '../Utilities';
import User from '../../helpers/User';

class LoginForm extends Component {
  static initialState = {
    email: '',
    password: ''
  }

  constructor(props) {
    super(props);
    this.state = LoginForm.initialState;
  }

  handleInputChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    const {onLoginSubmit} = this.props;
    const {baseUrl, loginUrl} = Configs.api
    //submit form
    User.loginUser(this.state)
    .then(response => {
      this.setState(LoginForm.initialState);
      //send data to the top level component
      onLoginSubmit(response.data);
    }).catch(error => {

      if (error.response) {
        const {data, status} = error.response;
        notify.show(<Errors errors={data.errors}/>, "error", 6000);
      } else if (error.request) {
        notify.show(errorMessages.connection, "error", 5000);
      } else {
        notify.show(errorMessages.connection, "error", 5000);
      }
    })
  }

  render() {

    return (
      <form onSubmit={this.handleLoginSubmit}>
        <div className="input-field">
          <label htmlFor="email">Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={this.handleInputChange}
            value={this.state.email}
            required/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleInputChange}
            value={this.state.password}
            required/>
        </div>
        <div className="center-align">
          <input type="submit" className="btn btn-small orange" name="login" id="login" value="Login"/>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired
};

export default LoginForm;
