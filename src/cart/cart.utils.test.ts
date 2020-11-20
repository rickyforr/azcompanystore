import { CartItemType } from "./cart.props.interface";
import { calculateTotal } from "./cart.utils";

describe("CartUtils", () => {
  describe("calculateTotal", () => {
    it("should return subtotal when cart is defined", () => {
      const cart: CartItemType[] = [
        { id: "4", name: "hat", price: 3, quantity: 4 },
        { id: "2", name: "pants", price: 2, quantity: 1 },
      ];
      const result = calculateTotal(cart);
      expect(result).toBe(14);
    });

    it("should return a subtotal of 0 when cart is empty", () => {
      const cart = [] as CartItemType[];
      const result = calculateTotal(cart);
      expect(result).toBe(0);
    });
  });
});
