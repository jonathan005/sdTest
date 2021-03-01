'use strict';
angular.module('productList').
    component('productList',{
        //template: "<div class=''>{{click}}<button ng-click='clickTest()'>CLICK</button></div>",
        templateUrl: '/templates/product-list.html',
        controller: function(Product,$http,$routeParams,$scope,$q,$mdDialog){
            $scope.window = false;
            $scope.items = Product.query()
            $scope.show = function(ev){
                $scope.fila = ev
                $scope.window = true;

            }
            var quantityMod
            $scope.ship = function(quantity) {
                quantityMod = quantity
            }
            $scope.receive = function(quantity) {
                quantityMod = quantity
            }
            $scope.cancel = function(){
                $scope.window = false;
            }
        }
    });
    