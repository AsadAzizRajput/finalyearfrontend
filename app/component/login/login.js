var app = angular.module('paktravellersmania')

    .controller('loginController', function ($scope, $http, $state) {
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
            useralready: false

        }



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
            return true;
        }
        $scope.LoginUser = function () {
            var a = $scope.validateData();
            console.log(LocalUrl)
            if (a && $scope.formData.userType == "traveller") {
                $http({
                    method: "POST",
                    url: LocalUrl + "travellerlogin",
                    data: $scope.formData,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function mySuccess(res) {
                    console.log(res)
                    localStorage.setItem('travellertoken', res.data.token);
                    localStorage.setItem('travelleremail', res.data.data.email);
                    localStorage.setItem('travellerid', res.data.data._id);
                    localStorage.setItem('usertype', 'traveller')
                    $state.go('home');

                }, function myError(error) {

                    console.log(error)
                });
            }

            if (a && $scope.formData.userType == "travellingagency") {
                $http({
                    method: "POST",
                    url: LocalUrl + "travellingagencylogin",
                    data: $scope.formData,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function mySuccess(res) {
                    localStorage.setItem('travellingagencytoken', res.data.token);
                    localStorage.setItem('travellingagencyemail', res.data.data.email)
                    localStorage.setItem('travellingagencyid', res.data.data._id);
                    localStorage.setItem('usertype', 'travellingagency')
                    console.log(res);
                    $state.go('home');
                }, function myError(error) {
                    console.log(error);
                });
            }

            if (a && $scope.formData.userType == "propertylender") {
                $http({
                    method: "POST",
                    url: LocalUrl + "propertylenderlogin",
                    data: $scope.formData,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function mySuccess(res) {
                    localStorage.setItem('propertylendertoken', res.data.token);
                    localStorage.setItem('propertylenderemail', res.data.data.email)
                    localStorage.setItem('propertylenderid', res.data.data._id);
                    localStorage.setItem('usertype', 'propertylender')
                    console.log(res);
                    $state.go('home');
                }, function myError(error) {
                    console.log(error);
                });
            }

        }


    })