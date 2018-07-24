var app = angular.module('paktravellersmania')

app.controller('travellerprofileController', function ($scope, $http, MyService, user) {

    var LocalUrl = 'http://localhost:3000/';
    $scope.travellerEmail = localStorage.getItem('travelleremail');
    var travellertoken = localStorage.getItem('travellertoken');
    var travellerid = localStorage.getItem('travellerid');
    $scope.previousData = [];
   // var file = $scope.myFile;


    $scope.flag = {
        firstname: false,
        lastname: false,
        nic: false,
        mobilenumber: false,
        updateprofileflag: false
    }
    if (user.data[0].name == '') {
        $scope.formData = {
            name: {
                firstname: '',
                lastname: ''
            },
            travellerid: travellerid,
            nic: user.data[0].nic,
            travellertoken: travellertoken,
            mobilenumber: user.data[0].mobilenumber
        }
    } else {
        $scope.formData = {
            name: {
                firstname: user.data[0].name[0].firstname,
                lastname: user.data[0].name[0].lastname,
            },
            travellerid: travellerid,
            nic: user.data[0].nic,
            travellertoken: travellertoken,
            mobilenumber: user.data[0].mobilenumber


        }

    }

    $scope.validateData = function () {
        if (!$scope.formData.name.firstname) {
            $scope.flag.email = true;
            return false;
        } else {
            $scope.flag.email = false;
        }
    }
    $scope.updateTraveller = function () {

        

        $http({
            method: "POST",
            url: LocalUrl + "updatetraveller",
            data:$scope.formData,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function mySuccess(response) {
            console.log(response)
            $scope.updateprofileflag = true;
            console.log($scope.flag);
        }, function myError(error) {
            console.log(error)
        });

    }
})