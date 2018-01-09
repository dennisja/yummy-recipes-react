import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Configs from "../../configs/Configs"
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
      [target.name]: target.value,
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    const { onLoginSubmit } = this.props;
    const { baseUrl, loginUrl } = Configs.api
    const form = event.target;
    //submit form
    axios({
      method: "POST",
      url: `${baseUrl}${loginUrl}`,
      auth: {
        username: this.state.email,
        password: this.state.password
      }
    })
      .then(response => {
        onLoginSubmit(response.data);
        this.setState(LoginForm.initialState);
        form.reset();
      })
      .catch(error => {
        const { data, status } = error.response;
        //data has the errors arra
        if ("errors" in data) {
          alert(data.errors);
        }
        console.log(data);
        console.log(status);
      })
  }

  render() {

    return (
      <form onSubmit={this.handleLoginSubmit}>
        <div className="input-field">
          <label htmlFor="email">Email </label>
          <input type="email" name="email" id="email" onChange={this.handleInputChange} required/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={this.handleInputChange} required/>
        </div>
        <div className="center-align">
          <input type="submit" className="btn" name="login" id="login" value="Login" />
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
