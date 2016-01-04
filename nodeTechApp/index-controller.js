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
                headline : news.data.responseData.results[i].title,
                url : news.data.responseData.results[i].unescapedUrl
            });
        }
        console.log(news.data.responseData.results[0].title);

        $scope.chartObject = {
            "type": "Line",
            "displayed": false,
            "data": {
                "cols": [
                    {
                        "id": "date",
                        "label": "date",
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
                chart: {
                    "title": "Closing Value",
                    subtitle: 'by Date in US Dollars'
                },
                "isStacked": "true",
                "fill": 20,
                'height':500,
                "displayExactValues": true,
                "vAxis": {
                    "gridlines": {
                        "count": 10
                    }
                },
                legend: { position: 'bottom' },
                "hAxis": {
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