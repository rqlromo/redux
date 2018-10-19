import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import Catalogue from './Catalogue';
import Cart from './Cart';
import Favourites from './Favourites';

class App extends Component {
  render() {
    return (
      <div className="container-market">
        <header>
          <h1>
            Fundete la tarjeta
          </h1>
        </header>
        <div className="subcontainer-market">
          <Catalogue/>
          <Cart/>
          <Favourites/>
        </div>
      </div>
    );
  }
}

export default App;
