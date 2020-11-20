import Axios from "axios";
import React from "react";
import CartItem from "./cart-item/cart-item.component";
import { ICartProps } from "./cart.props.interface";
import { calculateTotal } from "./cart.utils";

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
      Cart
      <table>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {props.cart.map((c) => (
          <tr key={c.id}>
            <CartItem cartItem={c} updateQuantity={props.updateQuantity} removeItem={props.removeItem} />
          </tr>
        ))}
      </table>
      <h5>Total</h5>
      <span>{calculateTotal(props.cart)}</span>
      <button onClick={submitCart}>Complete Purchase</button>
    </div>
  );
};

export default Cart;
