import React from 'react';
import { LaureateProp } from '../types';

class Laureate extends React.Component<LaureateProp> {
  render() {
    const { name, reason } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <p>{reason}</p>
      </div>
    );
  }
}

export default Laureate;
