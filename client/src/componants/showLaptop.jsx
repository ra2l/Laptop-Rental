import React, { Component } from "react";
import axios from "axios";

class showLaptop extends Component {
  state = {
    laptops: []
  };

  componentDidMount() {
    axios.get("http://localhost:3000/api/laptops/showLaptop").then(res => {
      this.setState({ laptops: res.data });
      console.log(res.data);
    });
  }
  render() {
    return (
      <div>
        <div>
          {this.state.laptops.map(laptop => (
            <div key={laptop.Model}>{laptop.Model}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default showLaptop;
