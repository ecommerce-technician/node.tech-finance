/**
 * Created by alex on 1/27/16.
 */
angular.module('NodeTechApp')
 .directive('socialTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/blocks/social-tab.html"
        };
    })
    .directive('pressTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/blocks/press-tab.html"
        };
    })
    .directive('ohlcTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/blocks/ohlc-tab.html"
        }
    })
    .directive('summaryTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/blocks/summary-tab.html",
            controller: "SummaryController"
        }
    });