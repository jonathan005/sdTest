'use strict';

angular.
    module('product').
        factory('Product', function($resource){
            var url = ''
            return $resource(url, {}, {
                query: {
                    url: '/products\\/',
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
                },
                create: { method: "POST", url: '/product/create\\/'},
                remove: { method: "DELETE"},
                update: { method: "PUT", url: '/product/q\\/'}
            })

        });