/**
 * Created by alex on 1/27/16.
 */
angular.module('NodeTechApp')
 .directive('socialTab', function($sce){
        return{
            restrict: "E",
            template: $sce.trustAsHtml("<md-tab label=\"Social\"><md-subheader class=\"md-no-sticky\">{{lookup.Name}} Social mentions</md-subheader><md-list-item class=\"md-3-line\" ng-repeat=\"item in tweets | limitTo : 10\"><div class=\"md-list-item-text\" layout=\"column\"> <a ng-href=\"{{item.url}}\"><h3>{{item.headline}}</h3></a><h4 ng-bind-html=\"item.description\"></h4></div></md-list-item></md-tab><md-tab label=\"Combine\"></md-tab>")
        };
    })

    .directive('pressTab', function($sce){
        return{
            restrict: "E",
            template: $sce.trustAsHtml("<md-tab label=\"Press\"> <md-subheader class=\"md-no-sticky\">{{lookup.Name}} News</md-subheader><md-list-item class=\"md-3-line\" ng-repeat=\"item in news\"><div class=\"md-list-item-text\" layout=\"column\"><a ng-href=\"{{item.url}}\"><h3 ng-bind-html=\"item.headline\"></h3></a><h4 ng-bind-html=\"item.description\"></h4> </div> </md-list-item><md-divider></md-divider></md-list></md-tab>")
        };
    })

    .directive('ohlcTab', function($sce){
        return{
            restrict: "E",
            template: $sce.trustAsHtml("<md-tab label=\"OHLC Chart\"><nvd3 flex options=\"options\" data=\"data\"></nvd3></md-tab>")
        }
    })

    .directive('summaryTab', function($sce){
        return{
            restrict: "E",
            template: $sce.trustAsHtml("<md-tab label=\"Summary\"><table><tr ng-repeat=\"(key, val) in quote.data\"><td class=\"md-title\">{{key}}</td><td>{{val}}</td></tr></table></md-tab>")
        }
    });