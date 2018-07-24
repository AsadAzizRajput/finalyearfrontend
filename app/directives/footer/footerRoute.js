'use strict';
/**
* @ngdoc function
* @name app.directive:navbarDirective
* @description
* # navbarDirective
* Directive of the app
*/
angular.module('paktravellersmania')

.directive('simpleFooter', function () {
   return {
     restrict: 'E',
     templateUrl: './app/directives/footer/footer.html',
    controller: 'footerCtrl',
   };
});