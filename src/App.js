// @flow

import React, { Component } from 'react';
import Sidebar from './Sidebar';
import './App.css';

type Props = {

};
type State = {
    diceRolled: Array<Die>,
    diceValue: number,
}

class App extends Component<Props, State> {
  state = {
    diceRolled: [],
    diceValue: 0,
  };

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
