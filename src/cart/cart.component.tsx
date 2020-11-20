import Axios from "axios";
import React from "react";
import CartItem from "./cart-item/cart-item.component";
import { ICartProps } from "./cart.props.interface";
import { calculateTotal } from "./cart.utils";
import "./cart.css";
import Button from "../button/button.component";

/**
 * Renders the cart with items to be purchased and the current subtotal.
 *
 * @param props
 */
const Cart: React.FunctionComponent<ICartProps> = (props) => {
  const submitCart = async () => {
    await Axios.post("api/carts", props.cart)
      .then(function (response) {
        window.alert("your order is complete");
      })
      .catch(function () {
        window.alert("something went wrong with your order");
      });
  };

  return (
    <div>
      {!props.cart.length && <h3>No Items In Cart</h3>}
      {!!props.cart.length && (
        <>
          <h3 className="cart-title">Cart</h3>
          <table className="cart-table">
            <tr className="cart-table-row">
              <th className="cart-table-header">Item</th>
              <th className="cart-table-header">Price</th>
              <th className="cart-table-header">Quantity</th>
            </tr>
            {props.cart.map((c) => (
              <tr key={c.id} className="cart-table-row">
                <CartItem cartItem={c} updateQuantity={props.updateQuantity} removeItem={props.removeItem} />
              </tr>
            ))}
          </table>
          <h3>
            SubTotal <span>${calculateTotal(props.cart)}</span>
          </h3>
          <Button onClick={submitCart} text="Complete Purchase" />
        </>
      )}
    </div>
  );
};

export default Cart;
