var app = angular.module('paktravellersmania')

app.controller('propertylenderController', function ($scope,$http) {

    var LocalUrl = 'http://localhost:3000/';
    $scope.travellingagencyemail = localStorage.getItem('propertylenderemail');
    var travellingagencytoken = localStorage.getItem('propertylendertoken');
    var travellingagencyid = localStorage.getItem('propertylenderid');
    $scope.formData = {

        id:travellingagencyid,
        token:travellingagencytoken,
        name:{
            firstname:"",
            lastname:""
        },
        contactnumber:{
            mobilenumber:"",
            landlinenumber:""
            },
            address:{
                zipcode:"",
                city:"",
                province:"",
                agencyaddressline:"",
                country:"Pakistan"
            },
            propertytype:"",
            nic:""
    };   
    console.log($scope.travellingagencyemail);
    
    $scope.updatePropertylender = function()
    {
           console.log($scope.formData)
       
            $http({
                    method : "POST",
                    url : LocalUrl+"updatepropertylender",
                    data:$scope.formData,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function mySuccess(response) {
                    console.log(response)
                }, function myError(error) {
                    console.log(error)
                });
            
    }

})