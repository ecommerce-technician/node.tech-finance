/**
 * Created by alex on 2/15/16.
 */
angular.module('NodeTechApp')
    .directive('mainHeader', function(){
        return{
            restrict: "E",
            templateUrl: "partials/blocks/layout/main-header.html",
            controller: "LayoutController"
        };
    })
    .directive('mainFooter', function(){
        return{
            restrict: "E",
            templateUrl: "partials/blocks/layout/main-footer.html",
            controller: "LayoutController"
        };
    });