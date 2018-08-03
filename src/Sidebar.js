// @flow

import React from 'react';
import DieContainer from './DieContainer';
import './Sidebar.css';

const Sidebar = (props: {
  dieTypes: Array<string>
}) => {
  const { dieTypes } = props;
  let dieContainers;
  if (dieTypes) {
    dieContainers = dieTypes.map(die => (
      <DieContainer key={die} die={die} />
    ));
  }
  return (
    <div className="sidebar">
      {dieContainers}
    </div>
  );
};

export default Sidebar;
