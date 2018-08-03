// @flow

import React, { Component } from 'react';
import Sidebar from './Sidebar';
import './App.css';

type Props = {

};
type State = {
    diceRolled: Array<Die>,
    diceValue: number,
    dieTypes: Array<string>,
};

class App extends Component<Props, State> {
  state = {
    diceRolled: [],
    diceValue: 0,
    dieTypes: ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'],
  };


  render() {
    const { diceRolled, diceValue, dieTypes } = this.state;
    return (
      <div>
        <header>
          <h1>
            React Dice Roller
          </h1>
        </header>
        <Sidebar dieTypes={dieTypes} />
      </div>
    );
  }
}

export default App;
