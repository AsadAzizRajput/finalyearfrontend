var app = angular.module('paktravellersmania')

app.controller('tourlistController', function ($scope,MyService,$state) {
    $scope.tours=[];

    MyService.tourlist().then(function(res){
        // console.log(res.data);
        $scope.tours =res.data
        console.log($scope.tours);
    //console.log($scope.Alluser);
    })
    $scope.seeDetail =function(tour)
        {
            console.log(tour);
            $state.go('tourdetail', {tourdetail: tour});
        }
})
