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
        vm.returnedData = commonUtils.getValByType(vm.data,"subType",vm.key);
        vm.typeData = vm.returnedData;
        console.log(":::::::::::::::::::::::::::::::::::::"+vm.returnedData);


        vm.getBrands= function() {
            vm.brands = commonUtils.getValueFromKey("brand",vm.returnedData);
            console.log("brandsssssssssssssss"+ vm.brands);
        };
        vm.getBrands();

        vm.selection = [];
        //$Scope.$watc
        vm.toggleSelection = function toggleSelection(brand) {
            console.log(brand);
            var index = vm.selection.indexOf(brand);

            if(index > -1) {
                vm.selection.splice(index,1);
            }
            else {
                vm.selection.push(brand);
            }
            console.log(vm.selection);
            vm.returnedData = {};
            //console.log("@@@@@@@@@@@@@@@@@@@@@@"+ vm.typeData);
            //console.log("*************************" + commonUtils.checkboxSearch(vm.typeData,vm.selection));
            vm.returnedData =  commonUtils.checkboxSearch(vm.typeData,vm.selection);
            console.log(vm.returnedData);
        }

    }


})();
