import React, { Component } from "react";
class insertLaptop extends Component {
  state = {};
  render() {
    return (
      <form className="container Laptop-form">
        <div className="form-row laptop-form-row">
          <div className="col-md-4 laptop-form-label">
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
          <div className="col-md-4 laptop-form-label">
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
          <div className="col-md-4 laptop-form-label">
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
          <div className="col-md-4 laptop-form-label">
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
          <div className="col-md-4 laptop-form-label">
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
        <div className="form-row laptop-form-row">
          <div className="col-md-4 laptop-form-label">
            <label> SSD</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Insert SSD size"
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
              class="form-control"
              placeholder="Insert HDD size"
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
              class="form-control"
              placeholder="Insert GPU Model"
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
              class="form-control"
              placeholder="Insert Stock Amount"
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
              class="form-control"
              placeholder="Insert Rent Per Day"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default insertLaptop;
