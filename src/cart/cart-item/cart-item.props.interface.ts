import { CartItemType } from "../cart.props.interface";

export interface ICartItemProps {
  removeItem: (id: string) => void;
  cartItem: CartItemType;
  updateQuantity: (newQuantity: number, id: string) => void;
}
