'use strict';
angular.module('productCreate').
    component('productCreate',{
        //template: "<div class=''>{{click}}<button ng-click='clickTest()'>CLICK</button></div>",
        templateUrl: 'api/templates/product-create.html',
        controller: function($http,$routeParams,$scope,$q,Product){
            $scope.productName = ''
            $scope.productSKU = ''
            $scope.price = 0
            $scope.weight = 0
            $scope.segment = ''
            $scope.quantity = 0
            console.log("You're at product create")
            $scope.createProduct = function() {
                console.log($scope.productName)
                var payload = {
                    productID: 0,
                    name: "SardinUS" ,
                    productSKU: "SDN500US",
                    price: 1,
                    weight: 2,
                    segment: "F" ,
                    quantity: 1,
                 };
                 console.log(payload)
                Product.create(payload, function(data) {
                console.log(data);
                    // do something which you want with response
            });
            };
            }
    });
    