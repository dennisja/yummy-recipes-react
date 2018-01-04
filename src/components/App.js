import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';

import Main from './Main';
import '../App.css';
import Header from './header/Header';


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
            <Header loggedIn={loggedIn} />
          </header>
          <div className="container">
            <Main loggedIn={loggedIn} userData={this.state.userData} />
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
