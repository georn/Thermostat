const express = require('express');
const path = require('path');
const app = express();

// Set the view engine and static files folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', function (req, res) {
  res.render('index');
});

// Port
app.listen(3000, function () {
  console.log('Server running on port 3000. Visit http://localhost:3000');
});
