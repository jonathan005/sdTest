'use strict';
angular.module('productList').
    component('productList',{
        //template: "<div class=''>{{click}}<button ng-click='clickTest()'>CLICK</button></div>",
        templateUrl: 'api/templates/product-list.html',
        controller: function(Product,$http,$routeParams,$scope,$q,$mdDialog){
            $scope.window = false;
            $scope.items = Product.query()
            $scope.show = function(ev){
                $scope.fila = ev
                $scope.window = true;

            }
            var quantityMod
            $scope.ship = function(id, nQuantity) {
                const payload = {
                    productID: id,
                    quantity: nQuantity * -1
                }
                Product.update(payload, function(data){
                    console.log(data)
                });
            }
            $scope.receive = function(id, nQuantity) {
                const payload = {
                    productID: id,
                    quantity: nQuantity
                }
                Product.update(payload, function(data){
                    console.log(data)
                });
            }
            $scope.cancel = function(){
                $scope.window = false;
            }
        }
    });
    