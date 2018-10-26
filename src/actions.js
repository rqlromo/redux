import { 
    ADD_PRODUCT_TO_CATALOGUE ,
    ADD_PRODUCT_TO_CART,
    ADD_PRODUCT_TO_FAVOURITES,
    DELETE_PRODUCT_FROM_CART,
    DELETE_PRODUCT_FROM_FAVOURITES,
    DELETE_ALL_PRODUCTS,
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

export function deteleProductFromCart(cartProduct) {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    cartProduct,
  };
}

export function deteleProductFromFavs(favouriteProduct) {
  return {
    type: DELETE_PRODUCT_FROM_FAVOURITES,
    favouriteProduct,
  };
}

export function deleteAllProducts(deleteProducts) {
  return {
    type: DELETE_ALL_PRODUCTS,
    deleteProducts,
  };
}