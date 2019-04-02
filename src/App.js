import React, { Component } from 'react';
import Layout from './components/layout/layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <p>Im in App</p>
        </Layout>
      </div>
    );
  }
}

export default App;
