/**
 * Created by ecommerce-technician on 9/20/15.
 */
angular.module('NodeTechApp')

    .controller('IndexController', function($scope, $http, $rootScope,$state, $stateParams, page, interactive, lookup, quote, news){

        $scope.page = page;

        var interactive = interactive;

        $scope.closingData = [];
        $scope.lookup = lookup;
        $scope.quote = quote;
        $scope.news = [];

        $scope.submit = function() {
            $state.go('root.index', {ticker : this.text});
        };

        for(i=0; i < news.data.responseData.results.length; i++) {
            $scope.news.push({
                headline : news.data.responseData.results[i].title
            });
        }
        console.log(news.data.responseData.results[0].title);

        $scope.chartObject = {
            "type": "LineChart",
            "displayed": false,
            "data": {
                "cols": [
                    {
                        "id": "date",
                        "label": "Month",
                        "type": "string",
                        "p": {}
                    },
                    {
                        "id": "close",
                        "label": lookup.Symbol,
                        "type": "number",
                        "p": {}
                    }
                ],
                "rows": []
            },
            "options": {
                "title": "Closing Val by Date",
                "isStacked": "true",
                "fill": 20,
                "displayExactValues": true,
                "vAxis": {
                    "title": "$",
                    "gridlines": {
                        "count": 10
                    }
                },
                "hAxis": {
                    "title": "Date"
                },
                "tooltip": {
                    "isHtml": false
                }
            },
            "formatters": {},
            "view": {
                "columns": [
                    0,
                    1
                ]
            }
        }
        for(i=0; i < interactive.data.Dates.length; i++) {
            $scope.chartObject.data.rows.push({
                c : [
                    {
                        "v": interactive.data.Dates[i]
                    },
                    {
                        "v": interactive.data.Elements[0].DataSeries.close.values[i]
                    }
                ]
            })
        }

  });