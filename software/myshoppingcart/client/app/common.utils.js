/**
 * Created by Akhila on 19-01-2017.
 */
(function() {
    angular
        .module('myshoppingcart.view')
        .service('commonUtils', commonUtils)
        .inject = ['$rootScope'];
    function commonUtils($rootScope){

        this.getValByKey = function(key,value) {
            var d = [];
            d = $rootScope.data;
            console.log(key+"/////////////"+value);
            //console.log
            //console.log(d[1][key]+"........");
            console.log("ooooooooooooooo"+d[1]);

            for (var i = 0; i < d.length; i++) {
                if(key in d[i] && d[i][key] == value){
                    console.log(d[i]+"........");

                    return d[i];
                }

            }
            return null;
        };

        this.getValueFromKey = function(key,array) {
            var list =[];
            for (var i = 0; i < array.length; i++) {
                if(key in array[i]){
                    if(list.indexOf(array[i]) == -1) {
                        list.push(array[i][key]);
                    }
                }

            }
            console.log("|||||||||||||||||||||||||||||||"+list)
            return list;
        };

        this.getValByType = function(key,value) {
            console.log("Key "+ key + "Value " + value)
            var d = [];
            d = $rootScope.data;
            console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;'+$rootScope.data)
            console.log("1111111111111111111111111111111111111111111"+d)
            var list = [];
            for (var i = 0; i < d.length; i++) {
                if(key in d[i] && d[i][key] == value){
                    list.push(d[i]);
                }
            }

            return list;
        };
        
        this.getSimilarProducts = function(data,key,value,keyOfCurrentProduct,currentProduct) {
            var list = [];
            for (var i = 0; i < data.length; i++) {
                console.log("data[i][key]"+data[i][key])
                if(key in data[i] && data[i][key] == value){
                    if(keyOfCurrentProduct in data[i] && data[i][keyOfCurrentProduct] != currentProduct){
                        console.log("::::::::::::"+data[i].name)
                        list.push(data[i]);
                    }
                }
            }
            console.log("This is list : " +list);
            return list;
        };
        var index = 0;
        this.slider = function(similarProducts) {
            var list = [];
            var count = 0;
            for(var i = index; i < similarProducts.length; i ++){
                if(i == similarProducts.length-1){
                    index = 0;
                    count = 0;
                }
                if(count == 5){
                    count = 0;

                    console.log("siiiiiiiiiiiiiiiiiimmmmmmmmmmmmmmmmmmmmmmmmmm"+ list);
                    return list;
                }
                else {
                    list.push(similarProducts[i]);
                    count ++;
                    index++;
                }
            }
        }
    }
}());
