'use strict';

/**
* @ngdoc function

* @name app.controller:navbarCtrl

* @description

* # navbarCtrl

* Controller of the app

*/

angular.module('paktravellersmania')

  .controller('NavbarCtrl', ['$scope', '$location','$state','$http',function ($scope, $location, $state, $http) {
    $scope.usertype = localStorage.getItem('usertype');
    var LocalUrl = 'http://localhost:3000/';
    $scope.flag = false;

    if ($scope.usertype == 'traveller') {
      $scope.useremail = localStorage.getItem('travelleremail');
      $scope.flag = true;
      console.log($scope.useremail)
    } else if ($scope.usertype == 'travellingagency') {
      $scope.useremail = localStorage.getItem('travellingagencyemail');
      $scope.flag = true;
      console.log($scope.useremail)
    } else if ($scope.usertype == 'propertylender') {
      $scope.useremail = localStorage.getItem('propertylenderemail');
      $scope.flag = true;
      console.log($scope.useremail)
    } else {
      console.log("dadasd");
    }


    $scope.logout = function () {

      if ($scope.usertype == 'traveller') {
        var trtoken = localStorage.getItem('travellertoken');
        $http({
          method: "DELETE",
          url: LocalUrl + "travellerslogout",
        
          headers: {
            'x-auth': trtoken
          }
        }).then(function mySuccess(response) {
          localStorage.clear();
          $scope.flag = false;
          $state.go('home');

        }, function myError(error) {
          console.log(error)
        });

      } else if ($scope.usertype == 'travellingagency') {

        var agtoken = localStorage.getItem('travellingagencytoken');
        console.log()
        $http({
          method: "DELETE",
          url: LocalUrl + "travellingagencylogout",
         
          headers: {
            'x-auth': agtoken
          }
        }).then(function mySuccess(response) {
          localStorage.clear();
          $scope.flag = false;
          $state.go('home');

        }, function myError(error) {
          console.log(error)
        });
      } else if ($scope.usertype == 'propertylender') {

        var pltoken = localStorage.getItem('propertylendertoken');
        $http({
          method: "DELETE",
          url: LocalUrl + "propertylenderlogout",
         
          headers: {
            'x-auth': pltoken
          }
        }).then(function mySuccess(response) {
          localStorage.clear();
          $scope.flag = false;
          $state.go('home');

        }, function myError(error) {
          console.log(error)
        });

      }

    };

  }]);