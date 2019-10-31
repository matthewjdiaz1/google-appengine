import React from 'react';
import simulate from '../../sim.js';
import { Line, Bar, defaults } from 'react-chartjs-2';
// defaults.global.animation = false; // disables animating charts by default

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      chart: null,
      labels: null,
      data: null,
      mostFrequentNum: null,
      allNumFrequency: null,
    };
    this.runSim = this.runSim.bind(this);
  }

  /*____________________________TODO____________________________
    - add user authentication
    - refactor sim script again to minimize latency

    AppEngine project name - Altirnao-AppEngine-Exercise
    _____________________________________________________________*/

  componentDidMount() {

  }
  runSim() {
    let results = simulate(100, 50);
    let labels = [];
    let data = [];
    for (const key in results) {
      labels.push(key);
      data.push(results[key]);
    }
    // pop off numbersGenerated and runtime
    labels.pop();
    labels.pop();
    data.pop();
    data.pop();

    let mostFrequentNum = [data.indexOf(Math.max(...data)) + 1, Math.max(...data)];

    let allNumFrequency = [];
    data.forEach(num => {
      allNumFrequency.push((num / results.numbersGenerated) * 100);
    });

    this.setState({
      results,
      labels,
      data,
      mostFrequentNum,
      allNumFrequency,
    });
  }

  render() {
    if (!this.state.results) {
      return (
        <div>
          <button onClick={() => this.runSim()}>Run Simulation</button>
        </div>
      )
    } else {
      return (
        <div className="app-wrap">
          <button onClick={() => this.runSim()}>
            Run Simulation Again
          </button>
          <div id="charts">
            <Bar
              data={{
                labels: this.state.labels,
                datasets: [{
                  label: 'Occurrence of Each Number',
                  data: this.state.data,
                  borderWidth: 1
                }],
              }}
              options={{ maintainAspectRatio: false }}
              height={200}
            />
          </div>
          <div id="charts">
            <div>
              <Line
                data={{
                  labels: this.state.labels,
                  datasets: [{
                    label: 'Chance of Each Number',
                    data: this.state.allNumFrequency,
                    borderWidth: 1
                  }],
                }}
                options={{ maintainAspectRatio: false }}
                height={200}
              />
            </div>
            <h4>{this.state.results.numbersGenerated} numbers were generated in {this.state.results.runtime.toFixed(1)}ms.</h4>
            <h4>The most frequently occuring number was {this.state.mostFrequentNum[0]} at {this.state.mostFrequentNum[1]} occurrences.</h4>
          </div>
        </div>
      )
    }
  }
}

export default App;
