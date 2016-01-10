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
                description: news.data.responseData.results[i].content,
                url : news.data.responseData.results[i].unescapedUrl,
            });
        }

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
                        "id": "open",
                        "label": lookup.Symbol + " open",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "close",
                        "label": lookup.Symbol + " close",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "average",
                        "label": "average",
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
                "tooltip": {
                    "isHtml": false
                },
                trendlines: {
                    1: {
                        type: 'linear',
                        color: 'green',
                        lineWidth: 3,
                        opacity: 0.3,
                        showR2: true,
                        visibleInLegend: true
                    }
                }
            },
            "formatters": {},
            "view": {
                "columns": [
                    0,
                    1,
                    2,
                    3
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
                        "v": interactive.data.Elements[0].DataSeries.open.values[i]
                    },
                    {
                        "v": interactive.data.Elements[0].DataSeries.close.values[i]
                    },
                    {
                        "v": average()
                    }
                ]
            })
        }

        function average() {

            var sum = 0;
            for( var i = 0; i < interactive.data.Elements[0].DataSeries.close.values.length; i++ ){
                sum += interactive.data.Elements[0].DataSeries.close.values[i]
            }

            var avg = sum/interactive.data.Elements[0].DataSeries.close.values.length;

            return avg;
        }

  });