//server needs to pass to controller
var express           = require('express'),
    app               = express(),   // for express, we create a new application
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://localhost:27017/mean-sample');
// defining new routes for app

app.use(bodyParser()); //middleware to parse body out

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/meetups', meetupsController.create); // passed a request and response by express



app.listen(3000, function() {
  console.log("I'm listening...")
})