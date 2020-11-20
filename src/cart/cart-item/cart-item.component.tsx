import React, { useEffect, useState } from "react";
import { ICartItemProps } from "./cart-item.props.interface";

/**
 * Renders a row showing the cart item details.
 *
 * @param props
 */
const CartItem: React.FunctionComponent<ICartItemProps> = (props) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(props.cartItem.quantity);
  }, [props.cartItem.quantity]);

  const updateQuantity = (newQuantity: string) => {
    props.updateQuantity(parseInt(newQuantity), props.cartItem.id);
  };

  const removeItem = (id: string) => {
    props.removeItem(id);
  };

  return (
    <>
      <td>{props.cartItem.name}</td>
      <td>${props.cartItem.price}</td>
      <td>
        <input type="number" defaultValue={props.cartItem.quantity} onChange={(e) => updateQuantity(e.target.value)} value={quantity}></input>
      </td>
      <td>${props.cartItem.price * quantity}</td>
      <td>
        <button onClick={(e) => removeItem(props.cartItem.id)}>Remove</button>
      </td>
    </>
  );
};

export default CartItem;
