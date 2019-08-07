import React, { Component } from "react";
import navbar from "./navbar";

class root extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <navbar />
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default root;
