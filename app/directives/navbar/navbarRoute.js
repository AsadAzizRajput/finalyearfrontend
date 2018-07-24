'use strict';
/**
* @ngdoc function
* @name app.directive:navbarDirective
* @description
* # navbarDirective
* Directive of the app
*/
angular.module('paktravellersmania')

.directive('simpleNavbar', function () {
   return {
     restrict: 'E',
     templateUrl: './app/directives/navbar/navbar.html',
    controller: 'NavbarCtrl',
   };
});