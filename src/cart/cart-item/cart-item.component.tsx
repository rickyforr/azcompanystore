import React, { useEffect, useState } from "react";
import Button from "../../button/button.component";
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
      <td className="cart-table-cell">{props.cartItem.name}</td>
      <td className="cart-table-cell">${props.cartItem.price}</td>
      <td className="cart-table-cell">
        <input
          style={{ maxWidth: "100px", border: "1px solid #dedede", padding: "5px" }}
          type="number"
          defaultValue={props.cartItem.quantity}
          onChange={(e) => updateQuantity(e.target.value)}
          value={quantity}
        ></input>
      </td>
      <td className="cart-table-cell">${props.cartItem.price * quantity}</td>
      <td style={{ paddingLeft: "10px" }}>
        <Button onClick={() => props.removeItem(props.cartItem.id)} text="Remove" />
      </td>
    </>
  );
};

export default CartItem;
