// meetup model for mongoose
var mongoose = require('mongoose');

module.exports = mongoose.model('Meetup', {
  name: String
});