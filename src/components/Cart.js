import React from "react";
import { connect } from "react-redux";

import { deteleProductFromCart } from "../actions";
import "../stylesheets/Cart.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.unique = this.unique.bind(this);
    this.find_product_by_id = this.find_product_by_id.bind(this);
  }

  unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  find_product_by_id = id => {
    var elementWithID = this.props.listCart.find(function(element) {
      return element.id === id;
    });
    return elementWithID;
  };

  render() {
    console.log('this.props en cart',this.props)
    const listCartID = this.props.listCart.map((ident) => {
      return ident.id;
    });

    const listCartIDUnique = listCartID.filter(this.unique);

    return (
      <div className="container-list">
        <h3>Cart</h3>
        <div>
          <ul>
            {listCartIDUnique.map((id, index) => {
              return (
                <li key={index}>
                  <p>
                    {this.find_product_by_id(id).unit}
                  </p>
                  <div>
                    {
                      listCartID.filter(elem => {
                        return elem === id;
                      }).length
                    }
                  </div>
                  <button
                    className=""
                    onClick={() =>
                      this.props.deteleProductFromCart(this.find_product_by_id(id))
                    }
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
