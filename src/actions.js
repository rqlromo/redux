import { 
    ADD_PRODUCT_TO_CATALOGUE ,
} from "./constants";

export function addProductToCatalogue(product) {
  return {
    type: ADD_PRODUCT_TO_CATALOGUE,
    product,
  };
}

