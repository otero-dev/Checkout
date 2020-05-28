import React, { Component } from 'react';
import { Container, Summary } from './components/basic';

import Nav from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Container>
          <Summary>product overview</Summary>
        </Container>
      </div>
    );
  }
}

export default App;
