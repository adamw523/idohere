appApp.controller('CheckinMapCtrl', function($scope, checkin) {
  $scope.activities = checkin.activities();

  console.log('checkin activity is', checkin.activity);

  var timeoutVal = 10 * 1000 * 1000;

  if (navigator.geolocation) {
    var timeoutVal = 10 * 1000 * 1000;
    navigator.geolocation.getCurrentPosition(
      function(position) {
        console.log('got location', position);
      },
      function(error) {
        var errors = {
          1: 'Permission denied',
          2: 'Position unavailable',
          3: 'Request timeout'
        };

        console.log('getCurrentPosition error', errors[error]);
      },
      { enableHighAccuracy: true,
        timeout: timeoutVal,
        maximumAge: 0 }
    );
  }

});
