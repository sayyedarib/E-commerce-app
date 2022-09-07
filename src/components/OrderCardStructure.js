import React, { Component } from "react";
import OrderCard from "./OrderCard";

export default class OrderCardStructure extends Component {
  constructor() {
    super();
    this.state = {
      articlesOrder: [],
    };
  }

  async componentDidMount() {
    let url_order = "https://assessment.api.vweb.app/orders";
    let data_order = await fetch(url_order);
    let parsedDataOrder = await data_order.json();
    this.setState({ articlesOrder: parsedDataOrder});
  }

  render() {
    return (
      <>
        <div className="orderStructure">
          {this.state.articlesOrder.map((element) => {
            return element.order_id<=20?(
              <div key={element.order_id}>
                <OrderCard
                  orderId={element.order_id}
                  quantity={element.quantity}
                  date={element.order_date}
                />
              </div>):(""
            );
          })}
        </div>
      </>
    );
  }
}
