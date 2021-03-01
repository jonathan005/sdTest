'use strict';
angular.module('productApp').
    config(
        function(
            $locationProvider,
            $routeProvider,
            ){  
                $locationProvider.html5Mode({enabled:true})
                $routeProvider.
                when("/", {
                    template:"<home></home>"
                }).
                when("/products", {
                    template:"<product-list><product-list>"
                }).
                when("/create", {
                    template:"<product-create><product-create>"
                }).
                when("/inventory", {
                    template:"<inventory-detail><inventory-detail>"
                })
            });