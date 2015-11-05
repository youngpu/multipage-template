var myApp = angular.module('myApp', ['ui.router'])
// Config route provider
.config(function($stateProvider) {
    $stateProvider
  .state('/#/', {
    url:'/landing',
    templateUrl: 'templates/landing.html',
    controller: 'LandingController',
  })
  .state('content', {
    url:'/content',
    templateUrl: 'templates/content.html',
    controller: 'ContentController',
  })
  .state('about', {
    url:'/about',
    templateUrl: 'templates/about.html',
    controller: 'AboutController',
  })
})

// Landing page controller
.controller('LandingController', function($scope){
  $scope.number = 20
})

// About page controller
.controller('AboutController', function($scope){
  $scope.about = "Here's some information about this page."
})

// Content controller
.controller('ContentController', function($scope){
  $scope.url = "http://conference.unavsa.org/wp-content/uploads/2015/06/SEA-pic.jpg"
})

