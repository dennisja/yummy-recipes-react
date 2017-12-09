import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Main from './Main';


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
      <BrowserRouter>
        <div>
          <header>
            <h1> This is the header</h1>
          </header>
          <div className="container">
            <Main />
          </div>
          <footer>
            <h1>This is the footer</h1>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
