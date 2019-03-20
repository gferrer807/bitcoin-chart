import React from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';


class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //set to dates
      labels: [],
      //set to price
      priceData: [],
      data: {
        labels: this.state.labels,
        datasets: [{
            label: 'Bitcoin Price',
            data: this.state.priceData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1,
            fill: false,
            lineTension: 0
        }]
    }
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-03-10&end=2019-03-19')
    .then((data) => {
      
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(
      <div className="wrapper">
         <Line
          data={this.state.data}
          width={500}
          height={550}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
}

export default Graph;