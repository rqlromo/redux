import React from "react";
import { connect } from "react-redux";

class Favourites extends React.Component {
  render() {
    return (
      <div className="container-list">
        <h3>Favourites</h3>

        <ul>
          {this.props.listFav.map((product, index) => {
            return <li key={index}>{product.prod}</li>;
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
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);
