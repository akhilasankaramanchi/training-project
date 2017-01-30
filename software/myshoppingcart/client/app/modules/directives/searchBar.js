/**
 * Created by Akhila on 25-01-2017.
 */
(function () {
    angular
        .module('myshoppingcart.home')
        .directive('searchBar',searchBar);

    function searchBar() {
        return {
            restrict : 'E',
            templateUrl : '/app/partials/searchBar.html',
            scope : {
                searchitem: '='
            }
        }
    }
}());