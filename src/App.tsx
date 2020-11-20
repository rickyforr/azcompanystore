import React, { useState } from "react";
import "./app.css";
import { addItem, removeItem, updateItemQuantity } from "./app.utils";
import Cart from "./cart/cart.component";
import { CartItemType } from "./cart/cart.props.interface";
import Products from "./products/products.component";

/**
 * The root component for the application.
 */
const App = () => {
  const [cart, setCart] = useState([{ id: "4", name: "hat", price: 3, quantity: 4 }]);

  const addToCart = (cartItem: CartItemType) => {
    setCart(addItem(cartItem, cart));
  };

  const removeItemFromCart = (id: string) => {
    setCart(removeItem(id, cart));
  };

  const updateQuantity = (value: number, id: string) => {
    setCart(updateItemQuantity(id, value, cart));
  };

  return (
    <div className="App">
      <Products addToCart={addToCart} />
      <Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItemFromCart} />
    </div>
  );
};

export default App;
