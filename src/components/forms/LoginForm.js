import React, {Component} from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import {displayError} from '../Utilities';
import User from '../../helpers/User';

class LoginForm extends Component {
  static propTypes = {
    onLoginSubmit: PropTypes.func.isRequired
  }

  static initialState = {
    email: '',
    password: ''
  }

  state = LoginForm.initialState;

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    const {onLoginSubmit} = this.props;
    //submit form
    User.loginUser(this.state)
    .then(response => {
      this.setState(LoginForm.initialState);
      //send data to the top level component
      onLoginSubmit(response.data);
    }).catch(error => {
      displayError(error);
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

export default LoginForm;
