import React from "react";
import { connect } from "react-redux";

import { deteleProductFromCart } from "../actions";

class Cart extends React.Component {
  render() {
    return (
      <div className="container-list">
        <h3>Cart</h3>

        <div>
          <ul>
            {this.props.listCart.map((product, index) => {
              return (
                <li key={index}>
                  {product.unit}
                  <button
                    onClick={() => this.props.deteleProductFromCart(product)}
                  >
                    borrar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listCart: state.listCart.listCart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deteleProductFromCart: cartProduct =>
      dispatch(deteleProductFromCart(cartProduct))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
