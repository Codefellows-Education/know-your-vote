import React, { Component } from 'react';
import Layout from './components/layout/layout';
import FindReps from './components/findReps/findReps';
import { Provider } from "react-redux";
import createStore from "./store";

export const store = createStore();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Layout>
          <FindReps />
        </Layout>
      </div>
      </Provider>
    );
  }
}


export default App;
