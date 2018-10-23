import { 
  ADD_PRODUCT_TO_CART, 
  DELETE_PRODUCT_FROM_CART,
} from "../constants";

const initialState = {
  listCart: []
};

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        listCart: state.listCart.concat([action.cartProduct])
      };

    case DELETE_PRODUCT_FROM_CART:
    if(state.listCart.includes(action.cartProduct.id)){
      state.listCart.splice(action.cartProduct.id-1,1);
    }
      return {
        state
      };

    default:
      return state;
  }
}
