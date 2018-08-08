import React, { Component } from 'react';

import Header from './topnav/topNav_Components'
import Container from './container/container_Components'

/**
 * App renders the top-level page structure
 */

class App extends Component {
  render() {
    return (
    <div>
      <Header.Header />
      <Container.Container />

    </div>

    );
  }
}

export default App;