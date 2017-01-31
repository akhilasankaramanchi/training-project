/**
 * Created by Akhila on 17-01-2017.
 */
(function(){
    "use strict";
     angular.module("myshoppingcart",[
         'ui.router',
         'ngSanitize',
         'myshoppingcart.home',
         'myshoppingcart.search',
         'myshoppingcart.view',
         'jkAngularRatingStars',
         'pascalprecht.translate',
         'checklist-model'
     ]);

}());
