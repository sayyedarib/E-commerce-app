import React from "react";
import OrderCardStructure from "./OrderCardStructure";
import ProductCardStructure from "./ProductCardStructure";
import ProductCard from "./ProductCard";
// import { Link, Routes } from "react-router-dom";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Redirect,
//   } from "react-router-dom";

export default function HomePage() {
  return (
    <>

      <div className="options">
        <a href="ProductCardStructure.js/">
        <div className="feature">

          <h1>My Shop</h1>
        </div>
        </a>
        <div className="feature">
          <h1>My Order</h1>
        </div>
      </div>

    </>
  );
}
