const express = require('express');
const path = require('path')
const app = express();

// app.set('port', 3000)

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, function () {
  console.log('Listerning on 3000');
})
