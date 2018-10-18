import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._add = this._add.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  state = {
    prod: ""
  };

  _add(event) {
    event.preventDefault();
    console.log("lentorra!");
    this.props.addProduct(this.state);
    this.setState({
      prod: ""
    });
  }

  handleChangeInput(e) {
    console.log(e.target.value);
    this.setState({
      prod: e.target.value
    });
  }

  render() {
    return (
      <div className="container-list">
        <h3>ProductList</h3>
        <form onSubmit={this._add}>
          <label htmlFor="">Introduce un articulo al catalogo</label>
          <input
            type="text"
            // value={this.state.prod}
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
    addProduct: product => dispatch(addProduct(product))
    // crea: (contact) => dispatch(addContact(contact))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
