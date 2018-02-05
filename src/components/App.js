import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Notifications from 'react-notify-toast';

import Main from './Main';
import '../App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Token from '../helpers/Token';
import Requests from '../helpers/Requests';


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
    // put data in locationStorage
    Token.setToken(userData);

    // set the access token of the axios instance
    Requests.axiosInstance.defaults.headers.common['x-access-token'] = Token.getTokenWithoutHttpCall();
  }

  logoutUser = (event)=>{
    event.preventDefault();
    this.setState(App.initialState);
    // clear data from location storage
    Token.deleteToken();
  }

  componentDidMount(){
    const userData = Token.getToken();
    if(userData){
      this.loginUser(userData);
    }
  }

  render() {
    const { loggedIn, userData } = this.state;
    return (
      <BrowserRouter>
        <div>          
          <Header 
            loggedIn={loggedIn} 
            logoutUser={this.logoutUser} 
            userData={userData.data}/>          
          <div className="container">
            <Notifications />
            <Main 
              loggedIn={loggedIn} 
              userData={userData.data} 
              loginUser={this.loginUser} />
          </div>
          <Footer isLoggedIn={loggedIn}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
