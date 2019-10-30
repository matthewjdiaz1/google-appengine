import React from 'react';
import simulate from '../../sim.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
    };
    this.runSim = this.runSim.bind(this);
  }

  /*____________________________TODO____________________________

    find C3 charts that optimally reflect data.

    refactor sim script to accept chart data format (arrays?)

    display chart in react components

    refactor sim script again to minimize latency
    _____________________________________________________________*/

  runSim() {
    this.setState({ results: simulate(100, 50) }, () => {
      console.log(this.state.results);
    });
  }

  render() {
    if (this.state.results) {
      return (
        <div>
          <button onClick={() => this.runSim()}>
            run again
          </button>
          <div>Total Numbers Generated: {this.state.results.numbersGenerated}</div>
          <div>Simulation Runtime: {this.state.results.runtime.toFixed(3)}ms</div>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={() => this.runSim()}>
            run simulation
          </button>
        </div>
      )
    }
  }
}

export default App;
