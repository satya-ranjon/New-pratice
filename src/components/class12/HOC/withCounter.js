import React, { Component } from "react";

const withCounter = (OrginalComponet) => {
  class newComponet extends Component {
    state = {
      count: 0,
    };
    handelCount = () => {
      this.setState((e) => ({ count: e.count + 1 }));
    };
    render() {
      return (
        <OrginalComponet
          handelCount={this.handelCount}
          count={this.state.count}
        />
      );
    }
  }
  return newComponet;
};

export default withCounter;
