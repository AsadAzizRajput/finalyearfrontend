'use strict';
/**
* @ngdoc function
* @name app.directive:navbarDirective
* @description
* # navbarDirective
* Directive of the app
*/
angular.module('paktravellersmania')

.directive('homeSlider', function () {
   return {
     restrict: 'E',
     templateUrl: './app/directives/slider/slider.html',
    controller: 'sliderCtrl',
   };
});