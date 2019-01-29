const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/..'))

app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname + '/../index.html'));
  res.send('hello from the server');
});

app.listen(port, () => console.log(`Tic-tac-toe server listening on port ${port}!`))