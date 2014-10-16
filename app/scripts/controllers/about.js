'use strict';

/**
 * @ngdoc function
 * @name myNewPortfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNewPortfolioApp
 */
angular.module('myNewPortfolioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
