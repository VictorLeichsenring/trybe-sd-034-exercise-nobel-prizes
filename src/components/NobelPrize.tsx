import React from 'react';
import { NobelPrizeProp } from '../types';

class NobelPrize extends React.Component<NobelPrizeProp> {
  render() {
    const { categoryFullName, dateAwarded } = this.props;
    return (
      <div>
        <h2>{categoryFullName.en}</h2>
        <h4>{dateAwarded}</h4>
      </div>
    );
  }
}

export default NobelPrize;
