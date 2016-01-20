var express = require('express'),
    app     = express(); // for express, we create a new application


// defining new routes for app

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.listen(3000, function() {
  console.log("I'm listening...")
})