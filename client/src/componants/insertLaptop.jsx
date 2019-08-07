import React, { Component } from "react";
import axios from "axios";
class insertLaptop extends Component {
  state = {
    Brand: "",
    Model: "",
    Screen: "",
    Processor: "",
    Ram: "",
    SSD: "",
    HDD: "",
    GPU: "",
    stock: 0,
    rentPerDay: 0
  };
  handleBrandName = event => {
    this.setState({ Brand: event.target.value });
  };
  handleModel = event => {
    this.setState({ Model: event.target.value });
  };
  handleScreenSize = event => {
    this.setState({ Screen: event.target.value });
  };
  handleProcessor = event => {
    this.setState({ Processor: event.target.value });
  };
  handleRam = event => {
    this.setState({ Ram: event.target.value });
  };
  handleSSD = event => {
    this.setState({ SSD: event.target.value });
  };
  handleHDD = event => {
    this.setState({ HDD: event.target.value });
  };
  handleGPU = event => {
    this.setState({ GPU: event.target.value });
  };
  handleStock = event => {
    this.setState({ stock: event.target.value });
  };
  handleRent = event => {
    this.setState({ rentPerDay: event.target.value });
  };

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/laptops/insert", this.state)
      .then(res => {
        //console.log(res);
        console.log(res.data);
      });
  };
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit} className="container Laptop-form">
            <div className="form-row laptop-form-row">
              <div className="col-md-4 laptop-form-label">
                <label> Brand</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert Brand Name"
                  onChange={this.handleBrandName}
                />
              </div>
            </div>

            <div className="form-row laptop-form-row">
              <div className="col-md-4 laptop-form-label">
                <label> Model</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert Model No"
                  onChange={this.handleModel}
                />
              </div>
            </div>

            <div className="form-row laptop-form-row">
              <div className="col-md-4 laptop-form-label">
                <label> Screen Size</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert Screen Size"
                  onChange={this.handleScreenSize}
                />
              </div>
            </div>

            <div className="form-row laptop-form-row">
              <div className="col-md-4 laptop-form-label">
                <label> Processor</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert Processor model"
                  onChange={this.handleProcessor}
                />
              </div>
            </div>

            <div className="form-row laptop-form-row">
              <div className="col-md-4 laptop-form-label">
                <label> RAM</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert RAM size"
                  onChange={this.handleRam}
                />
              </div>
            </div>
            <div className="form-row laptop-form-row">
              <div className="col-md-4 laptop-form-label">
                <label> SSD</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert SSD size"
                  onChange={this.handleSSD}
                />
              </div>
            </div>
            <div className="form-row laptop-form-row">
              <div className="col-md-4 laptop-form-label">
                <label> HDD</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert HDD size"
                  onChange={this.handleHDD}
                />
              </div>
            </div>
            <div className="form-row laptop-form-row">
              <div className="col-md-4 laptop-form-label">
                <label> GPU</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert GPU Model"
                  onChange={this.handleGPU}
                />
              </div>
            </div>
            <div className="form-row laptop-form-row">
              <div className="col-md-4 laptop-form-label">
                <label> Stock</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert Stock Amount"
                  onChange={this.handleStock}
                />
              </div>
            </div>
            <div className="form-row laptop-form-row">
              <div className="col-md-4 laptop-form-label">
                <label> Rent Per Day</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert Rent Per Day"
                  onChange={this.handleRent}
                />
              </div>
            </div>
            <div className="form-row laptop-form-row">
              <div className="col-md-4 laptop-form-label">
                <button type="submit"> Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default insertLaptop;
