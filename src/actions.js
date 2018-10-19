import { 
    ADD_PRODUCT_TO_CATALOGUE ,
    ADD_PRODUCT_TO_CART,
    ADD_PRODUCT_TO_FAVOURITES
} from "./constants";

export function addProductToCatalogue(catalogueProduct) {
  return {
    type: ADD_PRODUCT_TO_CATALOGUE,
    catalogueProduct,
  };
}

export function addProductToCart(cartProduct) {
  return {
    type: ADD_PRODUCT_TO_CART,
    cartProduct,
  };
}

export function addProductToFavs(favouriteProduct) {
  return {
    type: ADD_PRODUCT_TO_FAVOURITES,
    favouriteProduct,
  };
}