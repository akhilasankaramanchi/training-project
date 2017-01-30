(function() {
    "use strict";

    angular.module("myshoppingcart.search")
    .controller("searchController",searchController);
    searchController.$inject = ['$stateParams','$rootScope','commonUtils'];
    function searchController($stateParams,$rootScope,commonUtils) {
        var vm = this;
            //console.log("Insearch");
        vm.key = $stateParams.key;
        //console.log("++++++"+ vm.key);
        //console.log($rootScope.data);
        vm.data = $rootScope.data;
        vm.returnedData = commonUtils.getValByType("subType",vm.key);
        console.log(":::::::::::::::::::::::::::::::::::::"+vm.returnedData);


        vm.getBrands= function() {
            vm.brands = commonUtils.getValueFromKey("brand",vm.returnedData);
            console.log("brandsssssssssssssss"+ vm.brands);
        };
        vm.getBrands();
    }


})();
