const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hallo World!!');
});

app.listen(port, () => {
  console.log(`JSON to CSV app listening on port ${port}!`);
});
