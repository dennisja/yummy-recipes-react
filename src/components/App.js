import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Main from './Main';


import '../App.css';


class App extends Component {
  constructor() {
    super();
    this.axios = axios;
    this.state = {
      loggedIn: false,
      userData: null,
    };
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <BrowserRouter>
        <div>
          <header>
            <h1> This is the header</h1>
          </header>
          <div className="container">
            <Main loggedIn={loggedIn} />
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
