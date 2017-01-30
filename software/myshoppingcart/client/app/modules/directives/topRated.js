/**
 * Created by Akhila on 25-01-2017.
 */
(function () {
    angular
        .module('myshoppingcart.home')
        .directive('topRated',topRated);
    function topRated() {
        return {
            restrict : 'E',
            templateUrl :'/app/partials/topRated.html',
            scope : {
                products: '='
            }

        }
    }

}());
