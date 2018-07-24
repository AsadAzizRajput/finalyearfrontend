var app = angular.module('paktravellersmania')

app.controller('toursController', function ($scope,$http,MyService,$state) {

    var LocalUrl = 'http://localhost:3000/';
    MyService.gettours().then(function(res){
        // console.log(res.data);
        $scope.tours =res.data
        // console.log($scope.tours);
    //console.log($scope.Alluser);
    })

    $scope.seeQueries =function(queries)
    {
        // console.log(queries.bookingquery.length);
        if(queries.bookingquery.length>0){
        $state.go('toursqueries', {toursqueries: queries});
        }
        else
        {
            alert("No queries yet");
        }
    }

 
    $scope.deletetour =function(tour){
         var id = tour._id
    $http({
        method : "DELETE",
        url : LocalUrl+'deletetour/'+id,
        headers: {
            'Content-Type': 'application/json'
            },
     
    })
    .then(function mySuccess(response) {
        $state.go('tours');
        console.log(response);
       
    }, function myError(error) {
        console.log(error);
    });
    }
})