import { 
  ADD_PRODUCT_TO_CATALOGUE,
  DELETE_ALL_PRODUCTS,
} from "../constants";

const initialState = {
  listProducts: []
  // name: '',
  // avatar: '',
};

// El método Object.assign() se utiliza para copiar los valores de todas la propiedades enumerables de uno o más objetos fuente a un objeto destino. Retorna el objeto destino.
// Sintaxis
// Object.assign(objetivo, ...fuentes)
//Es equivalente a spread operators

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CATALOGUE:
      // Con la opcion de spread:
      return {
        // Con la opcion de spread:
        listProducts: [
          ...state.listProducts,
          {
            unit: action.catalogueProduct,
            id: state.listProducts.length + 1
          }
        ]
      };
    // Con la opcion de concat:
    // ...state,
    // listProducts : state.listProducts.concat(
    // [
    //   {
    //     unit: action.catalogueProduct,
    //     id: state.listProducts.length + 1
    //   }
    // ])

    // return Object.assign({}, state, {
    //   listProducts: state.listProducts.concat([action.product]),
    //   name: action.name,
    //   avatar: action.avatar,
    // });

    case DELETE_ALL_PRODUCTS:
      let checkedCart = state.listProducts.filter(productFilter => {
        return productFilter.id !== action.deleteProducts.id;
      });

      return {
        ...state,
        listProducts: checkedCart
      };

    default:
      return state;
  }
}
