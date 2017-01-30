/**
 * Created by Akhila on 25-01-2017.
 */
(function () {
    angular
        .module('myshoppingcart.view')
        .directive('similarProducts',similarProducts);

    function similarProducts(){
        return {
            restrict : 'E',
            templateUrl:'/app/partials/similarProducts.html',
            scope:{
                products:'=',
                clickFn:'&'
            }
        }
    }
}());
