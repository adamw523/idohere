'use strict';

appApp.controller('MainCtrl', function($scope, checkin) {
  $scope.activities = checkin.activities();
  console.log(checkin, $scope.activies);

});
