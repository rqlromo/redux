import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
  render() {
    return (
      <div className="container-list">
        <h3>Cart</h3>

        <div>
          <ul>
            {this.props.listCart.map((product, index) => {
              return <li key={index}>{product}</li>;
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
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
