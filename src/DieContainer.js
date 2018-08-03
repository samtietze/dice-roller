// @flow

import React, { Component } from 'react';
import Die from './Die';
import './DieContainer.css';

class DieContainer extends Component<Props> {
  render() {
    return (
      <div className="dieContainer">
        <Die />
      </div>
    );
  }
}

export default DieContainer;
