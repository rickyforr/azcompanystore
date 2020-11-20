import React from "react";
import "./product.css";
import { IProductProps } from "./product.props.interface";

/**
 * Renders a single product from the online store.
 * @param props
 */
const Product: React.FunctionComponent<IProductProps> = (props) => {
  const addToCart = () => {
    const cartItem = {
      id: props.product.id,
      name: props.product.name,
      price: props.product.price,
      quantity: 1,
    };
    props.addToCart(cartItem);
  };

  return (
    <div className="product-container">
      <img className="image" src={props.product.imageUrl}></img>
      <span>{props.product.name}</span>
      <span>${props.product.price}</span>
      <button className="add-button" onClick={() => addToCart()}>
        Add
      </button>
    </div>
  );
};

export default Product;
