import { CartItemType } from "./cart/cart.props.interface";

/**
 * Adds items or updates the item quantity then returns the updated cart.
 *
 * @param cartItem    The item to be added/updated.
 * @param cart        The current cart.
 */
export const addItem = (cartItem: CartItemType, cart: CartItemType[]): CartItemType[] => {
  const itemInCart = cart.map((c) => c.id).includes(cartItem.id);
  if (itemInCart) {
    const updatedCart = cart.map((c) => {
      if (c.id === cartItem.id) {
        return { ...c, quantity: c.quantity + cartItem.quantity };
      }
      return c;
    });
    return updatedCart;
  } else {
    return [...cart, cartItem];
  }
};

/**
 * Removes an item from the cart and returns the updated cart.
 *
 * @param id      The id of the item to be removed.
 * @param cart    The current cart.
 */
export const removeItem = (id: string, cart: CartItemType[]): CartItemType[] => {
  return cart.filter((c) => c.id !== id);
};

/**
 * Updates the quantity of an item in the cart and returns the updated cart.
 *
 * @param id       The id of the item to updated.
 * @param value    The new value for the item quantity.
 * @param cart     The current cart.
 */
export const updateItemQuantity = (id: string, value: number, cart: CartItemType[]): CartItemType[] => {
  return cart.map((c) => {
    if (c.id === id) {
      return { ...c, quantity: value };
    }
    return c;
  });
};
