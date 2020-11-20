import { CartItemType } from "../../cart/cart.props.interface";
import { ProductType } from "../products.component";

export interface IProductProps {
  product: ProductType;
  addToCart: (cartItem: CartItemType) => void;
}
