import React from "react";
import Button from "../../button/button.component";
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
      <span className="product-name">{props.product.name}</span>
      <span className="product-price"> ${props.product.price}</span>
      <span className="add-button-container">
        <Button text="Add" onClick={addToCart}></Button>
      </span>
    </div>
  );
};

export default Product;
