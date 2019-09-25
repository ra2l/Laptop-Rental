import React, { Component } from "react";
import axios from "axios";
import LaptopCard from "./laptopCard";

class showLaptop extends Component {
  state = {
    laptops: [],
    count: 0
  };

  componentDidMount() {
    axios.get("http://localhost:3000/api/laptops/showLaptop").then(res => {
      this.setState({ laptops: res.data });
      console.log(this.state.laptops);
    });
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          {this.state.laptops.map(laptop => (
            <div className="col-lg-4" key={laptop.Model}>
              <LaptopCard key={laptop._id} id={laptop._id} laptop={laptop} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default showLaptop;
