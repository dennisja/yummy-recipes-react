import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';

import Main from './Main';
import '../App.css';
import Header from './header/Header';


class App extends Component {
  static initialState = {
    loggedIn: false,
    userData: {
      data: null,
      token: "",
    },
  }
  
  state = App.initialState;

  loginUser = (userData) => {
    this.setState({
        loggedIn: true,
        userData: userData,
    })
    //put data in locationStorage
    console.log(userData)
  }

  logoutUser = ()=>{
    this.setState(App.initialState);
    //clear data from location storage
  }

  render() {
    const { loggedIn, userData:{data:userData} } = this.state;
    return (
      <BrowserRouter>
        <div>
          <header>
            <Header 
              loggedIn={loggedIn} 
              logoutUser={this.logoutUser} 
              userData={userData}/>
          </header>
          <div className="container">
            <Main loggedIn={loggedIn} userData={this.state.userData} loginUser={this.loginUser} />
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
