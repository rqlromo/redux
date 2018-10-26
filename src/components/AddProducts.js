import React from "react";
import { connect } from "react-redux";
import { addProductToCatalogue } from "../actions";
import "../stylesheets/Form.css";

class AddProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prod: " "
    };

    this._addToCatalogue = this._addToCatalogue.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    // this.handleFocusInput = this.handleFocusInput.bind(this);
    // this.handlePressEnter = this.handlePressEnter.bind(this);
  }

  _addToCatalogue(event) {
    if (this.state.prod !== " ") {
      event.preventDefault();
      this.props.addProductToCatalogue(this.state.prod);
      this.setState({
        prod: " "
      });
    }
  }

  handleChangeInput(event) {
    this.setState({
      prod: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form className="form-container" onSubmit={this._addToCatalogue}>
          <label htmlFor="">Introduce un articulo al catalogo</label>
          <input
            type="text"
            value={this.state.prod}
            onChange={this.handleChangeInput}
          />
          <button type="submit">Añadir Producto!</button>
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
    addProductToCatalogue: catalogueProduct =>
      dispatch(addProductToCatalogue(catalogueProduct))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProducts);
