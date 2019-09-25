/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
class laptopCard extends Component {
  state = {};
  render() {
    //console.log(this.props.laptop);
    return (
      <div className="card card-margin-bottom">
        <img
          className="card-img-top card-img"
          src="https://assets.pcmag.com/media/images/545790-meet-the-2019-razer-blade-15-advanced-edition.jpg?width=810&height=456"
          alt="ab"
        />
        <div className="card-body">
          <h5 className="card-title">
            {this.props.laptop.Brand + " - " + this.props.laptop.Model}
          </h5>
          <p className="card-text">
            <b>Detials:</b>{" "}
            {this.props.laptop.Screen +
              " screen" +
              " , " +
              this.props.laptop.Processor +
              " processor" +
              " , " +
              this.props.laptop.Ram +
              " ram" +
              " , " +
              this.props.laptop.SSD +
              " SSD" +
              " , " +
              this.props.laptop.HDD +
              " HDD" +
              " , " +
              this.props.laptop.GPU +
              " GPU"}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default laptopCard;
