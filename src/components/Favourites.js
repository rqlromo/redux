import React from "react";
import { connect } from "react-redux";

import { deteleProductFromFavs } from "../actions";

class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.unique = this.unique.bind(this);
    this.find_product_by_id = this.find_product_by_id.bind(this);
  }

  unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  find_product_by_id = id => {
    var elementWithID = this.props.listFav.find(function(element) {
      return element.id === id;
    });
    return elementWithID;
  };

  render() {
    const listFavID = this.props.listFav.map(ident => {
      return ident.id;
    });

    const listFavIDUnique = listFavID.filter(this.unique);

    return (
      <div className="container-list">
        <h3>Favourites</h3>

        <ul>
          {listFavIDUnique.map((id, index) => {
            return (
              <li key={index}>
                <p>{this.find_product_by_id(id).unit}</p>
                <div>
                  {
                    listFavID.filter(elem => {
                      return elem === id;
                    }).length
                  }
                </div>
                <button
                  onClick={() =>
                    this.props.deteleProductFromFavs(
                      this.find_product_by_id(id)
                    )
                  }
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
