"use strict";
var app = angular.module('paktravellersmania', ['ui.router']) ;
app.directive('onlyNum', function() {
    return function(scope, element, attrs) {

        var keyCode = [8, 9, 37, 39, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 110];
        element.bind("keydown", function(event) {
            //console.log($.inArray(event.which,keyCode));
            if ($.inArray(event.which, keyCode) === -1) {
                scope.$apply(function() {
                    scope.$eval(attrs.onlyNum);
                    event.preventDefault();
                });
                event.preventDefault();
            }

        });
    };
});


app.directive('demoFileModel', function ($parse) {
    return {
        restrict: 'A', //the directive can be used as an attribute only

        /*
         link is a function that defines functionality of directive
         scope: scope associated with the element
         element: element on which this directive used
         attrs: key value pair of element attributes
         */
        link: function (scope, element, attrs) {
            var model = $parse(attrs.demoFileModel),
                modelSetter = model.assign; //define a setter for demoFileModel

            //Bind change event on the element
            element.bind('change', function () {
                //Call apply on scope, it checks for value changes and reflect them on UI
                scope.$apply(function () {
                    //set the model value
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
});


app.service('MyService', function($http,$q) {
    this.tourlist = function() {
    var LocalUrl = 'http://localhost:3000/';
    var id = localStorage.getItem('id');
    var q =$q.defer(); 
    $http({
        method : "GET",
        url : LocalUrl+'gettourlist',
        headers: {
            'Content-Type': 'application/json'
            }
    })

    .then(function mySuccess(response) {
        q.resolve(response);
    }, function myError(error) {
        q.reject(error);
    });
    return q.promise;
  }

  this.gettravellersprofile = function() {
    var LocalUrl = 'http://localhost:3000/';
    var id = localStorage.getItem('travellerid');
    var usertype = localStorage.getItem('usertype');
    var q =$q.defer(); 
    if(usertype=='traveller'){

    $http({
        method : "GET",
        url : LocalUrl+'gettravellerbyid/'+id,
        headers: {
            'Content-Type': 'application/json'
            },
     
    })
    .then(function mySuccess(response) {
        q.resolve(response);
    }, function myError(error) {
        q.reject(error);
    });
    return q.promise;
    }

  }

  this.gettours = function() {
    var LocalUrl = 'http://localhost:3000/';
    var id = localStorage.getItem('travellingagencyid');
    var usertype = localStorage.getItem('usertype');
    var q =$q.defer(); 
    if(usertype=='travellingagency'){

    $http({
        method : "GET",
        url : LocalUrl+'gettourlistbyid/'+id,
        headers: {
            'Content-Type': 'application/json'
            },
     
    })
    .then(function mySuccess(response) {
        console.log(response);
        q.resolve(response);
    }, function myError(error) {
        q.reject(error);
    });
    return q.promise;
    }

  }

  this.uploadFileToUrl = function (file) {
      var LocalUrl = 'http://localhost:3000/';
      var q =$q.defer(); 
    var fileFormData = new FormData();
    fileFormData.append('file', file);
    
    console.log(fileFormData);
    var deffered = $q.defer();
    $http.post(LocalUrl+'getimage', fileFormData, {
        transformRequest: angular.identity,
        headers: { 'Content-Type': undefined}

    }).then(function mySuccess(response) {
        console.log(response);
        q.resolve(response);
    }, function myError(error) {
        q.reject(error);
    });
    return q.promise;
}

});


  
app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
   

      
  
    $stateProvider
    .state('adminpanel', {
        url: "/adminpanel",
        templateUrl: "./app/component/adminpanel/adminpanel.html",
        controller: 'adminPanelController'
    })
  
        .state('home', {
            url: "/home",
            templateUrl: "./app/component/home/home.html",
            controller: 'homeController'
        })
        .state('register', {
          url: "/register",
          templateUrl: "./app/component/register/register.html",
          controller: 'registerController'
      })
      .state('login', {
        url: "/login",
        templateUrl: "./app/component/login/login.html",
        controller: 'loginController'
    })

    .state('tours', {
        url: "/tours",
        templateUrl: "./app/component/tours/tours.html",
        controller: 'toursController'
    })
    .state('toursqueries', {
        url: "/toursqueries",
        templateUrl: "./app/component/tours/tourquery/tourquery.html",
        params: {
            toursqueries: null
          },
        controller: 'toursqueryController'
       
    })
      .state('travellerprofile', {
        url: "/travellerprofile",
        templateUrl: "./app/component/travellerprofile/travellerprofile.html",
        controller: 'travellerprofileController',
        resolve: {
            user: function($stateParams, MyService) {
              return MyService.gettravellersprofile()
            }}
    })
    .state('travellingagencyprofile', {
        url: "/travellingagencyprofile",
        templateUrl: "./app/component/travellingagencyprofile/travellingagencyprofile.html",
        controller: 'travellingagencyprofileController'
    })
    .state('propertylenderprofile', {
        url: "/propertylenderprofile",
        templateUrl: "./app/component/propertylenderprofile/propertylenderprofile.html  ",
        controller: 'propertylenderController'
    }) 
    .state('createtour', {
        url: "/createtour",
        templateUrl: "./app/component/createtour/createtour.html  ",
        controller: 'createtourController'
    })
    .state('tourlist', {
        url: "/tourlist",
        templateUrl: "./app/component/tourlist/tourlist.html  ",
        controller: 'tourlistController'
 
    })
    .state('tourdetail', {
        url: "/tourdetail",
        templateUrl: "./app/component/tourlist/tourdetail/tourdetail.html",
        params: {
            tourdetail: null
          },
        controller: 'tourdetailController'
    })
    
    

    $urlRouterProvider.otherwise("/home");

  })