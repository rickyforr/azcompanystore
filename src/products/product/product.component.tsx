import React from "react";
import "./product.css";
import { IProductProps } from "./product.props.interface";

const Product: React.FunctionComponent<IProductProps> = (props) => {
  const addToCart = (id: string) => {
    return;
  };

  return (
    <div className="product-container">
      <img className="image" src={props.product.imageUrl}></img>
      <span>{props.product.name}</span>
      <span>${props.product.price}</span>
      <button className="add-button" onClick={() => addToCart(props.product.id)}>
        Add
      </button>
    </div>
  );
};

export default Product;
