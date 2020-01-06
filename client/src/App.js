import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Route path="/" exact Component={Home} />
        <Route path="/profile" Component={Profile} />
      </>
    );
  }
}

export default App;
