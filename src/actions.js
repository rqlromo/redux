import { ADD_PRODUCT_TO_CATALOGUE } from "./constants";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT_TO_CATALOGUE,
    product,
  };
}