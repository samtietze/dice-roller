// @flow

import React, { Component } from 'react';
import Sidebar from './Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            React Dice Roller
          </h1>
        </header>
        <Sidebar />
      </div>
    );
  }
}

export default App;
