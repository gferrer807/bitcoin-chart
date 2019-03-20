const express = require('express');
const parser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(parser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../dist/index.html'))
})

app.get('/btcdata', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-03-10&end=2019-03-19')
  .then((data) => {
    res.send(data.data);
  })
  .catch((err) => {
    console.log(err);
  })
})

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname+'/../dist/bundle.js'))
})

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});