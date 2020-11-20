import { shallow } from "enzyme";
import React from "react";
import CartItem from "./cart-item/cart-item.component";
import Cart from "./cart.component";

describe("Cart", () => {
  const cart = [
    { id: "4", name: "hat", price: 3, quantity: 4 },
    { id: "2", name: "pants", price: 2, quantity: 1 },
  ];
  it("should render the cart items if cart is not empty", () => {
    const component = shallow(<Cart cart={cart} updateQuantity={jest.fn} removeItem={jest.fn} />);
    const cartItems = component.find(CartItem);
    expect(cartItems.length).toBe(2);
  });
});
