(function(){
    angular
        .module('myshoppingcart.home')
        .service('dataService',dataService);
    dataService.inject=['$http','$q'];
    function dataService($http, $q) {
        this.getData = function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/app/data/appdata.json'
            }).then(function(res){
                deferred.resolve(res);
            }, function(error){
                deferred.reject(error);
            });
            return deferred.promise;
        }
    }
}());