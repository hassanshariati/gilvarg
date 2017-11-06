/**
 * Created by shariati on 10/10/2017.
 */
//custom directive
var app = directive('productInfo', function () {
    return {
        restrict: 'E',
        scope : {
            info : "="
        },
        templateUrl: 'product.html'
    };
});

