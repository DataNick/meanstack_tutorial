app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
  var Meetup = $resource('/api/meetups'); // Build Meetup model and use base url of restful service for our model

  $scope.meetups = [
    {name: "MEAN SF Developers"},
    {name: "Some other meetup"}
  ]

  $scope.createMeetup = function () {
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save();
    // $scope.meetups.push({name: $scope.meetupName});
    // $scope.meetupName = '';
  }
}]);

// $resource is from ng-resource