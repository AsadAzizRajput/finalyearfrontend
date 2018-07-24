var app = angular.module('paktravellersmania')

app.controller('tourdetailController', function ($scope,$stateParams,$state,$http) {
$scope.tourDetails = $state.params.tourdetail

console.log($scope.tourDetails);
var LocalUrl = 'http://localhost:3000/';
var email = localStorage.getItem('travelleremail');
var id = localStorage.getItem('travellerid');
var usertype = localStorage.getItem('usertype')

var tourid = $scope.tourDetails._id;

$scope.formData = {
    tourid:tourid,
    travellerid:id,
    travelleremail:email,
    name:"",
    numberofadults:"",
    numberofkids:"",
    phonenumber:"",
    message:""
};

$scope.sendQuery=function()
{
    

    console.log($scope.formData);
if(id){
    $http({
            method : "POST",
            url : LocalUrl+"tourquery",
            data:$scope.formData,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function mySuccess(response) {
            console.log(response)
            alert("Your query has been send to travelling agnecy.");
            $state.go("tourlist");
        }, function myError(error) {
            console.log(error)
        });


    }
    else{
        alert("Please login first as a traveller");
    }
    
    }


})