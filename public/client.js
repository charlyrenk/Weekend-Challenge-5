var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html'
    }).when('/listings', {
        templateUrl: '/views/listings.html'
        // controller: 'listingsController as vm'
    }).when('/rentals', {
        templateUrl: '/views/rentals.html'
        // controller: 'rentalsController as vm'
    });
}]);