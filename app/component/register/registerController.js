var app = angular.module('paktravellersmania')

    .controller('registerController', function ($scope, $http, $state) {
        var LocalUrl = 'http://localhost:3000/';
        $scope.formData = {};
        $scope.formData.terms = false
        $scope.flag = {
            userexist: false,
            email: false,
            passwordlimit: false,
            confirmpassword: false,
            usertype: false,
            terms: false,
            useralready:false
        }

        $scope.traveller = {};
        $scope.travellingagency = {};
        $scope.propertylender = {}


        
        $scope.emailValidator = function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        $scope.validateData = function () {
            if (!$scope.emailValidator($scope.formData.email)) {
                $scope.flag.email = true;
                return false;
            } else {
                $scope.flag.email = false;
            }
            if ($scope.formData.password.length < 8) {
                $scope.flag.passwordlimit = true;
                return false;
            } else {
                $scope.flag.passwordlimit = false;

            }
            if ($scope.formData.password != $scope.formData.confirmPassword) {
                $scope.flag.confirmpassword = true;
                return false;
            } else {
                $scope.flag.confirmpassword = false;
            }

            if ($scope.formData.userType == null) {
                $scope.flag.usertype = true;
                return false;
            } else {
                $scope.flag.usertype = false;
            }
            if ($scope.formData.terms == false) {
                $scope.flag.terms = true;
                return false;
            } else {
                $scope.flag.terms = false;
            }
            return true;
        }
        $scope.registerUser = function () {
            var a = $scope.validateData();
            
            if (a && $scope.formData.userType == "traveller") {
                $http({
                    method : "POST",
                    url : LocalUrl+"travellersignup",
                    data:$scope.formData,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function mySuccess(response) {
                  console.log(response)
                  var res = response.data;
                        if(res.token)
                        {
                            localStorage.setItem('travellertoken', res.token);
                            localStorage.setItem('travelleremail', res.traveller.email);
                            localStorage.setItem('travellerid', res.traveller._id);
                            localStorage.setItem('usertype','traveller')
                            $state.go('travellerprofile');
                        }
                }, function myError(error) {
                    if(error){
                        $scope.flag.useralready=true;
                        $scope.errormessage = error.data;
                        console.log($scope.flag.useralready);
                        console.log($scope.errormessage);
                    }
                   
                    console.log(error)
                });
            }

            if (a && $scope.formData.userType == "travellingagency") {
                $http({
                    method : "POST",
                    url : LocalUrl+"travellingagencysignup",
                    data:$scope.formData,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function mySuccess(response) {
                   console.log(response)
                    var res = response.data;
                        if(res.token)
                        {
                            localStorage.setItem('travellingagencytoken', res.token);
                            localStorage.setItem('travellingagencyemail',res.travellingagency.email)
                            localStorage.setItem('travellingagencyid',res.travellingagency._id);
                            localStorage.setItem('usertype','travellingagency')
                            $state.go('travellingagencyprofile');
                        }
                }, function myError(error) {
                    if(error){
                        $scope.flag.useralready=true;
                        $scope.errormessage = error.data;
                        console.log($scope.flag.useralready);
                        console.log($scope.errormessage);
                    }
                    console.log(error)
                });
            }

            if (a && $scope.formData.userType == "propertylender") {
                $http({
                    method : "POST",
                    url : LocalUrl+"propertylendersignup",
                    data:$scope.formData,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function mySuccess(response) {
                   console.log(response)
                   var res = response.data;
                   if(res.token)
                   {
                       localStorage.setItem('propertylendertoken', res.token);
                       localStorage.setItem('propertylenderemail',res.propertylender.email)
                       localStorage.setItem('propertylenderid',res.propertylender._id);
                       localStorage.setItem('usertype','propertylender')
                       $state.go('propertylenderprofile');
                   }
                    
                }, function myError(error) {
                    if(error){
                        $scope.flag.useralready=true;
                        $scope.errormessage = error.data;
                        console.log($scope.flag.useralready);
                        console.log($scope.errormessage);
                    }
                    console.log(error)
                });
            }
           
        }

    })