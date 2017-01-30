/**
 * Created by Akhila on 17-01-2017.
 */
(function() {
    "use strict";
    angular
        .module("myshoppingcart")
        .run(appRun);
    appRun.$inject =['dataService','$rootScope'];
    function appRun(dataService,$rootScope) {
        displayData();
        function displayData() {
            dataService.getData().then(function (response){
                $rootScope.data = response.data;
                console.log("$rootScope.data");
                console.log($rootScope.data);
                console.log("$rootScope.data");


            },
            function (error){
                console.log("failure");

            });
        }
    }
}());