var app = angular.module('paktravellersmania')

app.controller('toursqueryController', function ($scope,$http,MyService,$state) {
    $scope.queries = $state.params.toursqueries.bookingquery

        console.log($state.params.toursqueries.bookingquery);
   


})