/**
 * Created by Akhila on 17-01-2017.
 */
(function() {
    "use strict";
    angular
        .module("myshoppingcart")
        .config(appConfig);

    appConfig.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];
    function appConfig($stateProvider,$urlRouterProvider,$locationProvider){

        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url:'/',
                templateUrl:'/app/partials/home.html',
                controller:'homeController',
                controllerAs: 'hc'
            })
            .state('search', {
                url:'/search/:key',
                templateUrl:'/app/partials/search.html',
                controller : 'searchController',
                controllerAs: 'sc'
            })
            .state('view', {
                url:'/view/:key',
                templateUrl:'/app/partials/views.html',
                controller : 'viewController',
                controllerAs: 'vc'

            });
    }
}());