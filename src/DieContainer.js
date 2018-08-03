// @flow

import React, { Component } from 'react';
import uuid from 'uuid';
import './DieContainer.css';
import Die from './Die';

type Props = {
  dieSpec: string,
};
type State = {
  numberOfDice: string,
  roll: Array<Die>,
};

class DieContainer extends Component<Props, State> {
  state = {
    numberOfDice: '',
    roll: [],
  }

  handleNumberInput = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const isNum = /^\d+$/;
    if (isNum.test(event.currentTarget.value) || !event.currentTarget.value) {
      this.setState({ numberOfDice: event.currentTarget.value });
    }
    // TODO: Handle error with some red text or another
  }

  handleRoll = (event: SyntheticInputEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const results = [];
    const { dieSpec } = this.props;
    const { numberOfDice } = this.state;
    for (let i = 0; i < Number(numberOfDice); i++) {
      results.push(Math.floor(Math.random() * Number(dieSpec)) + 1);
    }
    const rolledDice = results.map(die => (
      <Die key={uuid.v4()} result={die} />
    ));
    // now what
  }

  render() {
    const { dieSpec } = this.props;
    const { numberOfDice } = this.state;
    return (
      <div className="dieContainer">
        <div className="dieHeader">
          <img src={`./images/${dieSpec}.png`} alt={`${dieSpec}`} />
          <h2>
            {dieSpec}
          </h2>
        </div>
        <div className="die-input">
          <form>
            <label htmlFor={`${dieSpec}Input`}>
            Number to roll:
              <input onChange={this.handleNumberInput} type="text" id={`${dieSpec}Input`} placeholder="enter a number" value={numberOfDice} />
            </label>
            <button onClick={(e) => { this.handleRoll(e); }} type="submit">
              Roll
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default DieContainer;
