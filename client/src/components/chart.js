import React from 'react';
import Chart from 'chart.js';


class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
    this.getData = this.getData.bind(this);
  }

  getData() {

  }

  render() {
    return(
      <div className="wrapper">
         <div data={this.state.data} />
      </div>
    )
  }
}

export default Graph;