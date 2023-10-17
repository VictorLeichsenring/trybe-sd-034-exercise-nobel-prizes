import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NobelPrize from './components/NobelPrize';
import { NobelPrizeStates, AppState } from './types';

class App extends Component<object, NobelPrizeStates> {
  state:AppState = {
    nobelPrizes: [],
  };

  async componentDidMount() {
    const response = await fetch('https://api.nobelprize.org/2.1/nobelPrizes');
    const data = await response.json();
    this.setState({
      nobelPrizes: data.nobelPrizes,
    });
  }

  render() {
    const { nobelPrizes } = this.state;
    return (
      <div className="App">
        Nobel Prizes
        <Header />
        {nobelPrizes.map((nobel) => (
          <NobelPrize
            key={ nobel.dateAwarded }
            categoryFullName={ nobel.categoryFullName }
            dateAwarded={ nobel.dateAwarded }
          />
        ))}
      </div>
    );
  }
}

export default App;
