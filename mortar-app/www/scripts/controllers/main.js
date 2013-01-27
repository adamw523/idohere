appApp.controller('MainCtrl', function($scope, checkin, $location) {
  $scope.activities = checkin.activities();

  $scope.chooseActivity = function(activity) {
    checkin.activity = activity;
    $location.url('/checkin_map');
  }

});
