import React, { Component } from "react";

export default class classComponent extends Component {
  state = {
    count: 0,
    date: new Date(),
  };

  componentDidMount() {
    console.log("ComponentDidMount");
    document.title = `Count ${this.state.count}`;
    this.interval = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    document.title = `Count ${this.state.count}`;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  addClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    return (
      <div>
        <h4>{this.state.date.toLocaleTimeString()}</h4>
        <button onClick={this.addClick}>Add +1</button>
      </div>
    );
  }
}
