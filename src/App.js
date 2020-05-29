import React, { Component } from 'react';
import { Container } from './components/basic';
import ProductSummary from './components/productSummary';

import Nav from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Container>
          <ProductSummary />
        </Container>
      </div>
    );
  }
}

export default App;
