/**
 * Created by Akhila on 18-01-2017.
 */
(function() {
    "use strict";

    angular
        .module("myshoppingcart.view")
        .controller('viewController', viewController);

    viewController.$inject = ['$stateParams','$rootScope','commonUtils'];
    function viewController($stateParams,$rootScope,commonUtils) {
        var vm = this;
        console.log("Inviews");
        vm.key = $stateParams.key;
        console.log(vm.key);
        //console.log($rootScope.data);
        vm.data = $rootScope.data;
        vm.returnedData = commonUtils.getValByKey("name",vm.key);
        console.log("vm.returnedData.subType" + vm.returnedData.subType);
        vm.similarProducts = commonUtils.getSimilarProducts(vm.data,"subType",vm.returnedData.subType,"name",vm.key);

        vm.dispSimilarProducts = function() {
            vm.pro =  commonUtils.slider(vm.similarProducts);
        }
        vm.dispSimilarProducts();
        //console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<" + vm.similarProducts);
        //console.log(vm.returnedData);
        //console.log("........"+vm.returnedData.name);
        //console.log("........"+vm.returnedData.offers[0].type);
    }
})();
