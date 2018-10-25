import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART } from "../constants";

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

    // return {
    //   // Con la opcion de spread:
    //   listCart: [
    //     ...state.listCart,
    //     {
    //       unit: action.cartProduct,
    //       id: state.listCart.length + 1,
    //       counter: state.counter + 1,
    //     }
    //   ]
    // };

    case DELETE_PRODUCT_FROM_CART:
      let checkedProduct = state.listCart.find(productFilter => {
        return productFilter.id === action.cartProduct.id;
      });

      let index = state.listCart.indexOf(checkedProduct);

      state.listCart.splice(index, 1);

      // console.log("checkedProduct", checkedProduct);
      // console.log("index", index);
      // console.log("state.listCart", state.listCart);

      return {
        ...state,
        listCart: [
          ...state.listCart.slice(0, index),
          ...state.listCart.slice(index)
        ]
      };

    default:
      return state;
  }
}
