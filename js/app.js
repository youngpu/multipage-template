// Create app
var myApp = angular.module('myApp', ['ui.router'])

// Configure app
myApp.config(function($stateProvider) {
    $stateProvider
        .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeController',
        })
        .state('content', {
                url: '/content',
                templateUrl: 'templates/content.html',
                controller: 'ContentController',
        })
        .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'AboutController',
        })
})

// Landing page controller: define $scope.number as a number
myApp.controller('HomeController', function($scope) {
    $scope.number = 11
})

// About page controller: define $scope.about as a string
myApp.controller('AboutController', function($scope) {
    $scope.about = "This is my about section"
})

// Content controller: define $scope.url as an image
myApp.controller('ContentController', function($scope) {
    $scope.url = "https://i.ytimg.com/vi/oVXZTmi2ruI/maxresdefault.jpg"
})
