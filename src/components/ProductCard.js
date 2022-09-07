import React, { Component } from "react";
import "../App.css";

export default class ProductCard extends Component {
  render() {
    let { productName, sellingPrice, stock } = this.props;

    return (
      <>
        <div className="productCard">
          <h2>{productName}</h2>
          <h3>
            <span className="material-symbols-outlined">currency_rupee</span>
            {sellingPrice}
          </h3>
          {stock > 10 ? (
            <p>only {stock} left in stock</p>
          ) : (
            <p className="lessStock">only {stock} left in stock</p>
          )}
        </div>
      </>
    );
  }
}
