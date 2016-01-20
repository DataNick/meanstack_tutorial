app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resouce) {
  var Meetup = $resource('/api/meetups')
  $scope.meetups = [
    {name: "MEAN SF Developers"},
    {name: "Some other meetup"}
  ]

  $scope.createMeetup = function () {
    $scope.meetups.push({name: $scope.meetupName});
    $scope.meetupName = '';
  }
}]);

// $resource is from ng-resource