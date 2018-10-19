import React, { Component } from "react";
import ShowProducts from './ShowProducts';
import AddProducts from './AddProducts';
import '../stylesheets/Catalogue.css';

class Catalogue extends Component {
  render() {
    return (
      <div className="container-list">
        <h3>Catalogue</h3>
        <div className="subcontainer-list">
          <ShowProducts/>
          <AddProducts/>
        </div>
      </div>
    );
  }
}

export default Catalogue;