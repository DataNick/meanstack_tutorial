// just a node module
// require it so we can use this controller
// want to save this model
//mvc on server and client side

var Meetup = require('../models/meetup');
module.exports.create = function (req, res) {  // passed a request and response by express
  var meetup = new Meetup(req.body);
  meetup.save(function (err, result) {
    res.json(result); // send that result down to client with id and everything
  });
};

module.exports.list = function (req, res) {
  Meetup.find({}, function (err, results) {
    res.json(results);
  });
}