import { ADD_PRODUCT_TO_CART } from "../constants";

const initialState = {
  listCart: [],
};


export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return { 
        ...state, 
        listCart: state.listCart.concat([action.cartProduct]),
      }

    default:
      return state;
  }
}