'use strict';

/**
* @ngdoc function

* @name app.controller:navbarCtrl

* @description

* # navbarCtrl

* Controller of the app

*/

angular.module('paktravellersmania')

.controller('sliderCtrl', ['$scope', '$location', function
($scope, $location) {

$scope.isActive = function(path){

   var currentPath = $location.path().split('/')[1];

   if (currentPath.indexOf('?') !== -1) {

     currentPath = currentPath.split('?')[0];
   }
   return currentPath === path.split('/')[1];

};

}]);