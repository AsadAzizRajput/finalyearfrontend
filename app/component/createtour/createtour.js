var app = angular.module('paktravellersmania')

app.controller('createtourController', function ($scope,$http,$state) {
    var LocalUrl = 'http://localhost:3000/';
    var email = localStorage.getItem('travellingagencyemail');
    var id = localStorage.getItem('travellingagencyid');
   // var contactnumber = localStorage.getItem('contactnumber');
    var usertype = localStorage.getItem('usertype');

    $scope.formData = {
        travellingagencyid:id,
        email:email,
        name:"",
        price:"",
        numberofnights:"",
        numberofdays:"",
        departurelocation:"",
        returnlocation:"",
        departuretime:"",
        tourdetail:""
    };

    $scope.createTour=function()
    {
        console.log($scope.formData)
       if(usertype=='travellingagency')
       {
        $http({
                method : "POST",
                url : LocalUrl+"createtour",
                data:$scope.formData,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function mySuccess(response) {
                console.log(response)
                $state.go('tourlist');
            }, function myError(error) {
                console.log(error)
            });
        }
        else{
            alert('Please login as travellingagency')
        }
        }
})
