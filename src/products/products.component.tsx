import React, { useEffect, useState } from "react";
import Product from "./product/product.component";
import "./products.css";
import Axios from "axios";
import { CartItemType } from "../cart/cart.props.interface";
import Button from "../button/button.component";

export type ProductType = { id: string; name: string; price: number; imageUrl: string };

/**
 * Renders the products currently available for purchase.
 *
 * @param props    The product component props.
 */
const Products: React.FunctionComponent<{ addToCart: (cartItem: CartItemType) => void }> = (props) => {
  const [products, setProducts] = useState([] as ProductType[]);
  const [searchText, setSearchText] = useState("");

  const fetchProducts = async () => {
    await Axios.get("api/products")
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function () {
        window.alert("error getting products");
      });
  };

  const searchProducts = async () => {
    await Axios.get("api/products", { params: { name: searchText } })
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function () {
        window.alert("error getting products");
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchProducts();
    }
  };

  return (
    <div id="products" className="products">
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search for an item."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e) => onKeyDown(e)}
        />
        <Button onClick={searchProducts} text="Search" />
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Product product={product} addToCart={props.addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
