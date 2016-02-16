/**
 * Created by alex on 1/27/16.
 */
angular.module('NodeTechApp')
 .directive('socialTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/blocks/social.html"
        };
    })
    .directive('pressTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/blocks/press.html"
        };
    })
    .directive('ohlcTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/blocks/ohlc.html"
        }
    })
    .directive('summaryTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/blocks/summary.html",
            controller: "SummaryController"
        }
    });