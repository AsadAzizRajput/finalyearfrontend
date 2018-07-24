var app = angular.module('paktravellersmania')

app.controller('adminPanelController', function ($scope,MyService) {


    // $scope.product ={};
    // $scope.submit = function(){
    //     var formData = new FormData;
    //     for(key in $scope.product){
    //         // console.log(key,"key....");
    //         // console.log($scope.product[key])

    //         formData.append(key,$scope.product[key]);
    //     }
    //     var file = $('#file')[0].files[0]
    //     formData.append('image',file);
    //     $http({
    //         method: "POST",
    //         url: LocalUrl + "propertylenderlogin",
    //         data: formData,
    //         transformRequest:app.identity,
    //         headers: {
    //             'Content-Type': undefined
    //         }
    //     }).then(function mySuccess(res) {
           
    //         console.log(res);
       
    //     }, function myError(error) {
    //         console.log(error);
    //     });
   
   
   
    // }


  
    $scope.uploadFile = function () {
        var file = $scope.myFile;
            promise = MyService.uploadFileToUrl(file);

        promise.then(function (response) {
            $scope.serverResponse = response;
        }, function () {
            $scope.serverResponse = 'An error has occurred';
        })
    };

    // $scope.product = {};
    // $scope.uploadFile = function(){
    //     var formData = new FormData;
    //     var file = $scope.myFile;
    //     // var file = $scope.myFile;
    //     // for(key in file){
    //     //     formData.append(key,file[key]);
    //     // }

      
    //     formData.append('file',file);
    //     console.log(formData);


    // }

})
