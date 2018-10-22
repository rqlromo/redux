import { ADD_PRODUCT_TO_CATALOGUE } from "../constants";

const initialState = {
  listProducts: [],
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
      console.log('action.catalogueProduct',action.catalogueProduct)
      return { 
        ...state, 
        listProducts: state.listProducts.concat([action.catalogueProduct]),
      }
      // return Object.assign({}, state, {
      //   listProducts: state.listProducts.concat([action.product]),
      //   name: action.name,
      //   avatar: action.avatar,
      // });

    default:
      return state;
  }
}