app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resouce) {
  $scope.meetups = [
    {name: "MEAN SF Developers"},
    {name: "Some other meetup"}
  ]

  $scope.createMeetup = function () {
    $scope.meetups.push({name: $scope.meetupName});
    $scope.meetupName = '';
  }
}])

