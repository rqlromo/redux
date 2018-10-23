import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART } from "../constants";

const initialState = {
  listCart: []
};

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      console.log("action.cartProduct", action.cartProduct.id);
      return {
        ...state,
        listCart: state.listCart.concat([action.cartProduct])
      };

    case DELETE_PRODUCT_FROM_CART:
      console.log("antes de filter", state.listCart);

      let listCartFilter = state.listCart.find(productFilter => {
        return productFilter.id !== action.cartProduct.id;
      });

      // let listCartFilter = state.listCart.filter(productFilter => {
      //   if (productFilter.id !== action.cartProduct.id){
      //   return state.listCart.splice(action.cartProduct.id - 1, 1);
      //   }
      // });

      return {
        ...state,
        listCart: listCartFilter
      };

    default:
      return state;
  }
}
