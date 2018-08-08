import React, { Component } from 'react';

import Header from './topnav/topNav_Components'

/**
 * App renders the top-level page structure
 */

class App extends Component {
  render() {
    return (
    <div>
      <Header.Header />
      <p>Hello, World!</p>  
    </div>

    );
  }
}

export default App;