import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import ProductList from './ProductList';
import SecondaryProductList from './SecondaryProductList';

class App extends Component {
  render() {
    return (
      <div className="container-market">
        <header>
          <h1>
            MarketPlace chachi Pistachi
          </h1>
        </header>
        <div className="subcontainer-market">
          <ProductList/>
          <SecondaryProductList/>
          <SecondaryProductList/>
        </div>
      </div>
    );
  }
}

export default App;
