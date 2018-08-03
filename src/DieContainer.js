// @flow

import React, { Component } from 'react';
import './DieContainer.css';

type Props = {
  dieSpec: string,
};
type State = {
  numberOfDice: string,
};

class DieContainer extends Component<Props, State> {
  state = {
    numberOfDice: '',
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
              <input type="text" id={`${dieSpec}Input`} placeholder="enter a number" value={numberOfDice} />
            </label>
            <button type="submit">
              Roll
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default DieContainer;
