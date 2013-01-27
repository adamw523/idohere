'use strict';

var appApp = angular.module('appApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/checkin_map', {
        templateUrl: 'views/checkin_map.html',
        controller: 'CheckinMapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
