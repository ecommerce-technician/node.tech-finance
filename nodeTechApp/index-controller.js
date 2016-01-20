/**
 * Created by ecommerce-technician on 9/20/15.
 */
angular.module('NodeTechApp')

    .controller('IndexController', function($scope, $http, $rootScope,$state, $stateParams, page, interactive, lookup, quote, news){

        var interactive = interactive;
        $scope.page = page;
        $scope.closingData = [];
        $scope.lookup = lookup;
        $scope.quote = quote;
        $scope.news = [];

        //Reloads page if new ticker is searched
        $scope.submit = function() {
            $state.go('root.index', {ticker : this.text});
        };

        //News
        for(i=0; i < news.data.responseData.results.length; i++) {
            $scope.news.push({
                headline : news.data.responseData.results[i].title,
                description: news.data.responseData.results[i].content,
                url : news.data.responseData.results[i].unescapedUrl,
            });
        }

        //OHLC D3 Chart
        $scope.options = {
            chart: {
                type: 'candlestickBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 60
                },
                x: function(d){ return d['date']; },
                y: function(d){ return d['close']; },
                duration: 100,

                xAxis: {
                    axisLabel: 'Dates',
                    tickFormat: function(d) {
                        return d3.time.format('%x')(new Date(d));
                    },
                    showMaxMin: false
                },

                yAxis: {
                    axisLabel: 'Stock Price',
                    tickFormat: function(d){
                        return '$' + d3.format(',.1f')(d);
                    },
                    showMaxMin: false
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };

        $scope.data = [];
        $scope.data.push({values : []});

        for(i=0; i < interactive.data.Dates.length; i++) {
            $scope.data[0].values.push({
                    "date": Date.parse(interactive.data.Dates[i].split(/[.T]/)[0]),
                    "open": interactive.data.Elements[0].DataSeries.open.values[i],
                    "high": interactive.data.Elements[0].DataSeries.high.values[i],
                    "low": interactive.data.Elements[0].DataSeries.low.values[i],
                    "close": interactive.data.Elements[0].DataSeries.close.values[i],
                    "volume": 160363400,
                    "adjusted": 164.35
            });
        }
  });