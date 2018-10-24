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

      let checkedProduct = state.listCart.find(productFilter => {
        return productFilter.id === action.cartProduct.id;
      });

      let index = state.listCart.indexOf(checkedProduct);

      let spliceado = state.listCart.splice(index, 1);

      console.log("checkedProduct", checkedProduct);
      console.log("index", index);
      console.log("spliceado", spliceado);
      console.log("state.listCart", state.listCart);

      return {
        ...state,
        listCart: state.listCart.concat([state.listCart])
      };

    default:
      return state;
  }
}
