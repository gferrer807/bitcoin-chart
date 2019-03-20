import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/chart.js'


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="wrapper">
        Test
        <Graph />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
