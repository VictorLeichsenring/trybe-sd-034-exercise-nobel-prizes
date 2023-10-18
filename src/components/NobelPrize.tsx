import React from 'react';
import { NobelPrizeProp, Laureatetype } from '../types';
import Laureate from './Laureate';

class NobelPrize extends React.Component<NobelPrizeProp> {
  determineName(item: any): string {
    if (item.knownName?.en) return item.knownName.en;
    if (item.orgName?.en) return item.orgName.en;
    return '';
  }

  render() {
    const { categoryFullName, dateAwarded, laureates } = this.props;
    return (
      <div>
        <h2>{categoryFullName.en}</h2>
        <h4>{dateAwarded}</h4>
        {laureates && laureates.map((item: Laureatetype) => (
          <Laureate
            key={ item.id }
            name={ this.determineName(item) }
            reason={ item.motivation.en }
          />
        ))}

      </div>
    );
  }
}

export default NobelPrize;
