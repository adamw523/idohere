'use strict';

appApp.factory('checkin', function() {
  // Service logic
  // ...

  var meaningOfLife = 43;

  // Public API here
  return {
    activities: function() {
      var activities = [
        {name: 'hiking', img: 'noun_project_562.svg'},
        {name: 'golf', img: 'noun_project_673.svg'},
        {name: 'canoeing', img: 'noun_project_704.svg'},
        {name: 'rock climbing', img: 'noun_project_529.svg'},
        {name: 'walking dog', img: 'noun_project_564.svg'}
      ];

      return activities;
    }
  };
});
