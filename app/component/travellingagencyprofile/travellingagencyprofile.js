var app = angular.module('paktravellersmania')

app.controller('travellingagencyprofileController', function ($scope,$http) {

    var LocalUrl = 'http://localhost:3000/';
        $scope.travellingagencyemail = localStorage.getItem('travellingagencyemail');
        var travellingagencytoken = localStorage.getItem('travellingagencytoken');
        var travellingagencyid = localStorage.getItem('travellingagencyid');
        $scope.formData = {

            id:travellingagencyid,
            token:travellingagencytoken,
            travellingagencyname:'',
            travellingagencyregistrationnumber:'',
            contactnumber:{
                mobilenumber:"",
                landlinenumber:""
                },
                address:{
                    zipcode:"",
                    city:"",
                    province:"",
                    agencyaddressline1:"",
                    agencyaddressline2:"",
                    country:"Pakistan"
                },
                nic:""
        };   
        console.log($scope.travellerEmail);
        
        $scope.updateTravellingAgency = function()
        {

            
                $http({
                        method : "POST",
                        url : LocalUrl+"updatetravellingagency",
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