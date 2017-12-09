import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        };
    }

    render() {
        return (
          <div className="card green">
            <h1>Home Says Welcome { this.state.loggedIn ? 'Boss' : 'Stranger'}</h1>
          </div>
        );
    }
}

export default Home;
