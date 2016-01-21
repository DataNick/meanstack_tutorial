app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
  var Meetup = $resource('/api/meetups'); // Build Meetup model and use base url of restful service for our model
  // Syntax find meetups; use a get request againt api/meetups
  Meetup.query(function (results) {
    $scope.meetups = results; // only work if create a get route for a restful service for meetups
  });

  $scope.meetups = []

  $scope.createMeetup = function () {
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save(function (result) { // callback function
      $scope.meetups.push(result); // set new meetup onto the collection
      $scope.meetupName = '';
    });
    // $scope.meetups.push({name: $scope.meetupName});
    // $scope.meetupName = '';
  }
}]);

// $resource is from ng-resource