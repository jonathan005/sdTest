'use strict';
angular.module('productCreate').
    component('productCreate',{
        //template: "<div class=''>{{click}}<button ng-click='clickTest()'>CLICK</button></div>",
        templateUrl: 'api/templates/product-create.html',
        controller: function($scope,Product,$location){
            $scope.productName = ''
            $scope.productSKU = ''
            $scope.price = null
            $scope.weight = null
            $scope.segment = 'F'
            $scope.quantity = null
            $scope.mensaje = null
            console.log("You're at product create")
            $scope.createProduct = function() {
                const payload = {
                    productID: 0,
                    name: $scope.productName ,
                    productSKU: $scope.productSKU,
                    price: $scope.price,
                    weight: $scope.weight,
                    segment: $scope.segment ,
                    quantity: $scope.quantity,
                 };
                if ($scope.productName !== '' && $scope.productSKU !== '' && $scope.price !==null && $scope.weight !== null && $scope.quantity !== null ){
                    Product.create(payload, function(data) {
                        $scope.mensaje = false;
                        console.log(data);
                        $location.url('/products');
                            // do something which you want with response
                    });
                } else {
                    $scope.mensaje = true;
                }
                
            };
            }
    });
    