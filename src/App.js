import React, { Component } from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./App.css";
import History from "./History";

class App extends Component {
  state = { removeWelcome: false };

  ClickHistory = event => {
    this.setState({ removeWelcome: true });
  };

  ClickHome = event => {
    this.setState({ removeWelcome: false });
  };

  ShowWelcome = () => {
    if (this.state.removeWelcome !== true) {
      return <p>Welcome to Home</p>;
    }
  };

  render() {
    return (
      <div>
        <nav>
          <NavLink to="/" className="home-comp-link" onClick={this.ClickHome}>
            Home
          </NavLink>
          <NavLink
            to="/our-history"
            activeStyle={{
              color: "red"
            }}
            onClick={this.ClickHistory}
          >
            History
          </NavLink>
        </nav>

        {this.ShowWelcome()}

        <Route exact path="/our-history" component={History} />
      </div>
    );
  }
}

export default App;
