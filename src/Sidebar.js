// @flow

import React, { Component } from 'react';
import DieContainer from './DieContainer';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <DieContainer />
      </div>
    );
  }
}

export default Sidebar;
