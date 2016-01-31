/**
 * Created by alex on 1/27/16.
 */
angular.module('NodeTechApp')
 .directive('socialTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/tabs/social-tab.html"
        };
    })
    .directive('pressTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/tabs/press-tab.html"
        };
    })
    .directive('ohlcTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/tabs/ohlc-tab.html"
        }
    })
    .directive('summaryTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/tabs/summary-tab.html"
        }
    });