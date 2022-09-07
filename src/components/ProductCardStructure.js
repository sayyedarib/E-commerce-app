import React, { Component } from "react";
import ProductCard from "./ProductCard";

export default class productCardStructure extends Component {
  constructor() {
    super();
    this.state = {
      articlesProduct: [],
    };
  }

  async componentDidMount() {
    let url_product = "https://assessment.api.vweb.app/products";
    let data_product = await fetch(url_product);
    let parsedDataProduct = await data_product.json();
    this.setState({ articlesProduct: parsedDataProduct});
  }

  render() {
    return (
      <>
        <div className="productStructure">
          {this.state.articlesProduct.map((element) => {
            return (
              <div key={element.product_id}>
                <ProductCard
                  productName={element.name}
                  sellingPrice={element.selling_price}
                  stock={element.stock}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
