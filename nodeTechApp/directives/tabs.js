/**
 * Created by alex on 1/27/16.
 */
angular.module('NodeTechApp')
 .directive('socialTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/social-tab.html",
            //controller: "SocialController"
        };
    })

    .directive('pressTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/press-tab.html",
            //controller: "PressController"
        };
    })

    .directive('ohlcTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/ohlc-tab.html",
            //controller: "OhlcController"
        }
    })

    .directive('summaryTab', function(){
        return{
            restrict: "E",
            templateUrl: "partials/summary-tab.html",
            //controller: "SummaryController"
        }
    });