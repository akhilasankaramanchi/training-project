/**
 * Created by Akhila on 24-01-2017.
 */
(function() {
    angular
        .module('myshoppingcart')
        .directive('myHeader', myHeader);
    function myHeader(){
        return {
            restrict: 'E',
            templateUrl: '/app/partials/header.html'
        };
    }
}());
