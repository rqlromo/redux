import React from "react";
import { connect } from "react-redux";
import { addProductToCatalogue } from "../actions";
import '../stylesheets/Form.css';

class AddProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prod: ""
    };

    this._add = this._add.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  _add(event) {
    event.preventDefault();
    this.props.addProductToCatalogue(this.state);
  }

  handleChangeInput(e) {
    this.setState({
      prod: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form className="form-container" onSubmit={this._add}>
          <label htmlFor="">
            Introduce un articulo al catalogo
          </label>
          <input
            type="text"
            value={this.state.prod}
            onChange={this.handleChangeInput}
          />
          <button type="submit">
            Añadir Producto!
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addProductToCatalogue: catalogueProduct => dispatch(addProductToCatalogue(catalogueProduct)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProducts);
