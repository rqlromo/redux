import React, { Component } from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../actions";
import { addProductToFavs } from "../actions";

class ShowProducts extends Component {

  // _addToCart(event,product) {
  //   event.preventDefault();
  //   this.props.addProductToCart(product);
  // }

  render() {
    return (
      <div>
        <ul>
          {this.props.listProducts.map((product, index) => {
            console.log('product',product);
            return <li key={index}>
              {product}
              <button onClick={()=> this.props.addProductToCart(product)}>
                comprar
              </button>
              <button onClick={()=> this.props.addProductToFavs(product)}>
                favoritear
              </button>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

//tenemos acceso a un props que se llama listProducts
//el state nos lo devuelve el callback de mapStateToProps (es como el event de los addEventListener)
function mapStateToProps(state) {
  console.log('state.listCatalogue',state.listCatalogue)
  return {
    //con state.listCatalogue.listProducts accedemos al estado global, luego tenemos que acceder al estado del reducer que deseeemos y despues a la clave del estado que queramos
    listProducts: state.listCatalogue.listProducts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addProductToCart: cartProduct => dispatch(addProductToCart(cartProduct)),
    addProductToFavs: favouriteProduct => dispatch(addProductToFavs(favouriteProduct)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowProducts);
