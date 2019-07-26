import React, { Component } from "react";
class insertLaptop extends Component {
  state = {};
  render() {
    return (
      <form className="container Laptop-form">
        <div className="form-row laptop-form-row">
          <div className="col-md-2 laptop-form-label">
            <label> Brand</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Insert Brand Name"
            />
          </div>
        </div>

        <div className="form-row laptop-form-row">
          <div className="col-md-2 laptop-form-label">
            <label> Model</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Insert Model No"
            />
          </div>
        </div>

        <div className="form-row laptop-form-row">
          <div className="col-md-2 laptop-form-label">
            <label> Screen Size</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Insert Screen Size"
            />
          </div>
        </div>

        <div className="form-row laptop-form-row">
          <div className="col-md-2 laptop-form-label">
            <label> Processor</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Insert Processor model"
            />
          </div>
        </div>

        <div className="form-row laptop-form-row">
          <div className="col-md-2 laptop-form-label">
            <label> RAM</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Insert RAM size"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default insertLaptop;
