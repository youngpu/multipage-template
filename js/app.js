// Start app
var myApp = angular.module('myApp', ['ngRoute'])

// Config route provider
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/landing.html',
      controller: 'LandingController',
    })
   .when('/content/', {
    templateUrl: 'templates/content.html',
    controller: 'ContentController',
  })
   .when('/about/', {
    templateUrl: 'templates/about.html',
    controller: 'AboutController',
  })
})

.controller('LandingController', function($scope){
  $scope.number = 10
})
.controller('AboutController', function($scope){
  $scope.about = "Here's some information about this page.  It was built using angular, and is being used as an exercise to teach multi-page architecture."
})
.controller('ContentController', function($scope){
  $scope.url = "http://conference.unavsa.org/wp-content/uploads/2015/06/SEA-pic.jpg"
})