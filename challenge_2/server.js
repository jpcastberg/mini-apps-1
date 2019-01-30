const express = require('express');
const path = require('path');
const jsonConverter = require('./jsonConverter.js');

const app = express();
const port = 3000;

let csv;

const clientPath = path.join(__dirname, 'client');

app.use(express.static(clientPath));

app.get('/', (req, res) => {
  res.send('hello from the server');
});

app.get('/data', (req, res) => {
  res.send(csv);
});

app.post('/', (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString(); // convert Buffer to string
  });
  req.on('end', () => {
    console.log(body);
  });
  body = JSON.parse(body);
  csv = jsonConverter(body)
  console.log(csv);
  res.send('successful post');
  // res.end();
});

app.listen(port, () => {
  console.log(`JSON to CSV app listening on port ${port}!`);
});
