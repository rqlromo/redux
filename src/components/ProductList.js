import React, { Component } from "react";
import List from './List';
import Form from './Form';
import '../stylesheets/ProductList.css';

class ProductList extends Component {
  render() {
    return (
      <div className="container-list">
        <h3>ProductList</h3>
        <div className="subcontainer-list">
          <List/>
          <Form/>
        </div>
      </div>
    );
  }
}

export default ProductList;