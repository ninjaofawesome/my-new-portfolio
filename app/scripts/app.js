'use strict';

/**
 * @ngdoc overview
 * @name myNewPortfolioApp
 * @description
 * # myNewPortfolioApp
 *
 * Main module of the application.
 */
angular
  .module('myNewPortfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ItsHannahControllers',
    'DownwardsControllers',
    'UpwardsControllers',
    'MidwayControllers',
    'ContactControllers'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/amy', {
        templateUrl: 'views/amy.html',
        controller: 'AmyCtrl'
      })
      .when('/cinna', {
        templateUrl: 'views/cinna.html',
        controller: 'CinnaCtrl'
      })
      .when('/oldfashioned', {
        templateUrl: 'views/oldfashioned.html',
        controller: 'OldfashionedCtrl'
      })
      .when('/techway', {
        templateUrl: 'views/techway.html',
        controller: 'TechwayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


