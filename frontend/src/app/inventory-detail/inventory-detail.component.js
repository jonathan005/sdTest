'use strict';
angular.module('inventoryDetail').
    component('inventoryDetail',{
        //template: "<div class=''>{{click}}<button ng-click='clickTest()'>CLICK</button></div>",
        templateUrl: '/templates/inventory-detail.html',
        controller: function(Product,$http,$routeParams,$scope,$q){
            $scope.options = {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
            $scope.items = Product.query()
            $scope.labels = []
            $scope.data = []
            $scope.items.$promise.then(function(data){
                data.forEach(element => {
                    $scope.labels.push(element.productSKU)
                    $scope.data.push(element.quantity)
                    console.log(element)
                    
                });
                //$scope.topics = data.topics; //Changed data.data.topics to data.topics
            });

            $scope.items.$promise.then(function(data){
                const countF = data.filter((element) => element.segment === 'F').length;
                const countC = data.filter((element) => element.segment === 'C').length;
                const countM = data.filter((element) => element.segment === 'M').length;
                console.log(countF)
                $scope.labelSegmnet = ['Fish', 'Crustacean', 'Mollusc']
                $scope.dataSegment = [countF,countC,countM]
                //$scope.topics = data.topics; //Changed data.data.topics to data.topics
            });
            //console.log($scope.items)
            //$scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
            //$scope.series = ['Series A', 'Series B'];

            //$scope.data = [
            //    [65, 59, 80, 81, 56, 55, 40],
            //    [28, 48, 40, 19, 86, 27, 90]
            //];
        }
    });
    