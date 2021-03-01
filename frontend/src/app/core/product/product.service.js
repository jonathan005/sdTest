'use strict';

angular.
    module('product').
        factory('Product', function($resource){
            var url = '/json/products.json'
            return $resource(url, {}, {
                query: {
                    method: "GET",
                    params: {},
                    isArray: true,
                    cache: false,
                    // transformResponse
                    // interceptor
                },
                get: {
                    method: "GET",
                    // params: {"id": @id},
                    isArray: true,
                    cache: false,
                }
            })

        });