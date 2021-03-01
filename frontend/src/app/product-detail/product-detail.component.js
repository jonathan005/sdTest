'use strict';
angular.module('productDetail').
    component('productDetail',{
        //template: "<h1>DETALLE</h1>",
        templateUrl: '/templates/product-detail.html',
        controller: function($routeParams,$scope,$location){
            console.log($routeParams)
            var productos = [
                {id: "1", name:"ATUN", des: "DETALLE DE ATUN"},
                {id: "2", name:"ARROZ", des:"DETALLE DE ARROZ"},
                {id: "3", name:"CAMARON", des:"DETALLE DE CAMARON"}    
            ]
            $scope.title = "Product " + $routeParams.id;
            $scope.notFound = true
            var product;
            productos.forEach((p) => {
                if ($routeParams.id == p.id)
                $scope.notFound = false
                product = p
            });
            $scope.producto = product
            if($scope.notFound){
                $location.path("/404")
            }
            }
            
    });
    