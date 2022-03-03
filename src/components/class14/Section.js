import Content from "./Content";
import React from "react";
export default class section extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log("Section Rander");
    return <Content />;
  }
}
