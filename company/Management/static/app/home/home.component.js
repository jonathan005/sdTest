'use strict';
angular.module('home').
    component('home',{
        //template: "<div class=''>{{click}}<button ng-click='clickTest()'>CLICK</button></div>",
        templateUrl: 'api/templates/home.html',
        controller: function($location,$routeParams,$scope){
        console.log("You are at home")
        $scope.shipProducts = function (){
            $location.url('/products');
        }
        $scope.createProduct = function (){
            $location.url('/create');
        }
        $scope.openInventory = function (){
            $location.url('/inventory');
        }
        }

    });
    