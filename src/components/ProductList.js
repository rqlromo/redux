import React, { Component } from "react";
import List from './List';
import Form from './Form';


class ProductList extends Component {
  render() {
    return (
      <div>
        <Form/>
        <List/>
      </div>
    );
  }
}

export default ProductList;