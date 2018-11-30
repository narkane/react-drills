import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: [
        "hotdog",
        "mustard",
        "jack russel terrier",
        "steel plate",
        "glass shards"
      ],
      filterStr: ""
    };
  }

  handleChange(filter) {
    this.setState({ filterStr: filter });
  }

  render() {
    let foodsToDisplay = this.state.foods
      .filter((element, index) => {
        return element.includes(this.state.filterStr);
      })
      .map((element, index) => {
        return <h2>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} />
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
