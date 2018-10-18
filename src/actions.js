import { ADD_PRODUCT } from "./constants";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product,
  };
}