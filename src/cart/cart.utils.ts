import { CartItemType } from "./cart.props.interface";

/**
 * Returns the current subtotal based on items in the cart.
 *
 * @param cart    The current cart with items.
 */
export const calculateTotal = (cart: CartItemType[]): number => {
  if (!cart.length) {
    return 0;
  }
  return cart.map((c) => c.price * c.quantity).reduce((a, v) => a + v);
};
