(function(){
    "use strict";

    angular
        .module("myshoppingcart.home")
        .controller('homeController', homeController);


    homeController.$inject=['dataService','$rootScope','commonUtils'];

    function homeController(dataService,$rootScope,commonUtils){
        var vm = this;
        vm.text='welcome';
        vm.info = $rootScope.data;
        vm.mobiles = commonUtils.getValByType("subType","mobile");
        vm.laptop = commonUtils.getValByType("subType","laptop");
        vm.books = commonUtils.getValByType("type","Books");
        console.log("999999999999999999999999999999999"+ vm.mobiles);
    }
}());