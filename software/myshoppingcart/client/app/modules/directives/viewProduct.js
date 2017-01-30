/**
 * Created by Akhila on 25-01-2017.
 */
(function(){
    angular
        .module('myshoppingcart.view')
        .directive('viewProduct',viewProduct);
    function viewProduct() {
        return {
            restrict : 'E',
            templateUrl : '/app/partials/viewProduct.html',
            scope:{
                product:'='
            }
        }
    }
}());
