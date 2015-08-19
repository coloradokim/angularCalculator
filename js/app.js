var app = angular.module("calculatorApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/add/:x/:y', {
      templateUrl: 'partials/home.html',
      controller: 'AddController'
    })
    .when('/subtract/:x/:y', {
      templateUrl: 'partials/home.html',
      controller: 'SubtractController'
    })
});
