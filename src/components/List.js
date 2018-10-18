import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
  render() {
    console.log('props',this.props);
    return (
      <div>
        <ul>
          {this.props.listProducts.map(product => {
            return <li>{product.prod}</li>;
          })}
        </ul>
      </div>
    );
  }
}

//tenemos acceso a un props que se va a llamar list y otro que se va a llamar search
//el state nos lo devuelve el callback de mapStateToProps (es como el event de los addEventListener)
function mapStateToProps(state) {
  return {
    //con state.productList.listProducts accedemos al estado global, luego tenemos que acceder al estado del reducer que deseeemos y despues a la clave del estado que queramos
    listProducts: state.productList.listProducts,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
