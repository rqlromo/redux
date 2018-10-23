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
      
      let listCartFilter = state.listCart.filter(productFilter => {
        return productFilter.id !== action.cartProduct.id;
      });
      
      
      return {
        ...state,
        listCart: listCartFilter,
      };

    // console.log('state.listCart fuera de if',state.listCart);
    //   state.listCart.map(productCart => {
    //     console.log("productCart.id", productCart.id);
    //     console.log('action.cartProduct.id',action.cartProduct.id);

    //     if (productCart.id === action.cartProduct.id) {
    //       console.log('entro?')
    //       state.listCart.splice(action.cartProduct.id - 1, 1);
    //       console.log('state.listCart dentro de if',state.listCart);
    //     }
    //   });
    //   console.log("llega aqui?");
    //   console.log("state",state);
    //   return state;
    default:
      return state;
  }
}
