import {
  ADD_PRODUCT_TO_FAVOURITES,
  DELETE_PRODUCT_FROM_FAVOURITES,
} from "../constants";

const initialState = {
  listFav: []
};

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_FAVOURITES:
      return {
        ...state,
        listFav: state.listFav.concat([action.favouriteProduct])
      };


    case DELETE_PRODUCT_FROM_FAVOURITES:

      let listFavFilter = state.listFav.filter(productFilter => {
        console.log('action.favouriteProduct.id',action.favouriteProduct.id.length);
        return productFilter.id !== action.favouriteProduct.id;
      });

      return {
        ...state,
        listFav: listFavFilter
      };

    default:
      return state;
  }
}
