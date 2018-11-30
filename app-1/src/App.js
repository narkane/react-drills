import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  textEntered(msg) {
    this.setState({ message: msg });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <input onChange={e => this.textEntered(e.target.value)} />
      </div>
    );
  }
}

export default App;
