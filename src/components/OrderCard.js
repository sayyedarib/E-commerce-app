import React, { Component } from "react";
import "../App.css";

export default class ProductCard extends Component {
  render() {
    let { orderId, quantity, date } = this.props;

    return (
      <>
        <div className="orderCard">
          <div>
          <p><b>Order Id:</b>#{orderId}</p>
          <p>Date:{date}</p>
          </div>
          <h3>{quantity} Items</h3>
        </div>
      </>
    );
  }
}
