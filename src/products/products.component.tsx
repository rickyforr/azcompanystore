import React from "react";
import Product from "./product/product.component";
import { IProductProps } from "./products.props.interface";
import "./products.css";

const Products: React.FunctionComponent<IProductProps> = (props) => {
  return (
    <div className="products-container">
      {props.products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default Products;
