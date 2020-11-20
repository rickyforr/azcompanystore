export type CartItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export interface ICartProps {
  cart: CartItemType[];
  updateQuantity: (newQuantity: number, id: string) => void;
  removeItem: (id: string) => void;
}
