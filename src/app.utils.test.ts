import { addItem, removeItem, updateItemQuantity } from "./app.utils";
import { CartItemType } from "./cart/cart.props.interface";

describe("AppUtils", () => {
  describe("addItem", () => {
    it("should add item to cart if item with that id is not present in the cart", () => {
      const cart: CartItemType[] = [
        { id: "4", name: "hat", price: 3, quantity: 4 },
        { id: "2", name: "pants", price: 2, quantity: 1 },
      ];
      const cartItem: CartItemType = { id: "3", name: "shoes", price: 2, quantity: 1 };

      const result = addItem(cartItem, cart);

      expect(result.length).toBe(3);
      expect(result[2]).toBe(cartItem);
    });

    it("should update quantity of item in cart if item with that id is already present in the cart", () => {
      const cart: CartItemType[] = [
        { id: "4", name: "hat", price: 3, quantity: 4 },
        { id: "2", name: "pants", price: 2, quantity: 1 },
      ];
      const cartItem: CartItemType = { id: "4", name: "hat", price: 3, quantity: 1 };

      const result = addItem(cartItem, cart);

      expect(result.length).toBe(2);
      expect(result[0].quantity).toBe(5);
    });
  });

  describe("removeItem", () => {
    it("should remove item from cart if item with that id is present in the cart", () => {
      const cart: CartItemType[] = [
        { id: "4", name: "hat", price: 3, quantity: 4 },
        { id: "2", name: "pants", price: 2, quantity: 1 },
      ];

      const result = removeItem("4", cart);

      expect(result.length).toBe(1);
      expect(result[0].id).toBe("2");
    });
  });

  describe("updateItemQuantity", () => {
    it("should update the quantity of the item in the cart with the same id", () => {
      const cart: CartItemType[] = [
        { id: "4", name: "hat", price: 3, quantity: 4 },
        { id: "2", name: "pants", price: 2, quantity: 1 },
      ];
      const id = "4";
      const newQuantity = 6;

      const result = updateItemQuantity(id, newQuantity, cart);

      expect(result.filter((c) => c.id === id)[0].quantity).toBe(newQuantity);
    });
  });
});
