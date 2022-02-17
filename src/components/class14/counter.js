import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  handelCount = () => {
    this.setState((e) => ({ count: e.count + 1 }));
  };
  render() {
    const { count } = this.state;
    const { children } = this.props;
    return children(count, this.handelCount);
  }
}
