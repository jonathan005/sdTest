'use strict';
angular.module('productCreate').
    component('productCreate',{
        //template: "<div class=''>{{click}}<button ng-click='clickTest()'>CLICK</button></div>",
        templateUrl: '/templates/product-create.html',
        controller: function($http,$routeParams,$scope,$q){
            console.log("You're at product create")
            }
    });
    