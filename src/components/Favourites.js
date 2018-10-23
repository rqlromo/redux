import React from "react";
import { connect } from "react-redux";

import { deteleProductFromFavs } from "../actions";

class Favourites extends React.Component {
  render() {
    return (
      <div className="container-list">
        <h3>Favourites</h3>

        <ul>
          {this.props.listFav.map((product, index) => {
            return (
              <li key={index}>
                {product.unit}
                <button
                  onClick={() => this.props.deteleProductFromFavs(product)}
                >
                  borrar
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listFav: state.listFavourites.listFav
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deteleProductFromFavs: favouriteProduct =>
      dispatch(deteleProductFromFavs(favouriteProduct))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);
