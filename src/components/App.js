import axios from 'axios';
import React, { Component } from 'react';
import logo from '../logo.svg';


import '../App.css';


class App extends Component {
  constructor() {
    super();
    this.axios = axios;
  }
  componentDidMount() {
    this.testYummyLogin();
  }
  testYummyLogin() {
    const loginCredentials = `Basic ${btoa('dennisjjagwe@gmail.com:mypassword')}`;
    this.axios({
      url: 'http://localhost:5000/yummy/api/v1.0/auth/login/',
      method: 'post',
      headers: {
        Authorization: loginCredentials,
      },
    }).then((r) => {
      console.log(r.data);
      const { data, token } = r.data;
      if (data) {
        sessionStorage.setItem('my_token', token);
        localStorage.setItem('my_token', token);
      }
    }).catch((e) => {
      console.log(e);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
