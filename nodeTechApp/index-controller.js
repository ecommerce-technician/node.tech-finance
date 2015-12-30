/**
 * Created by ecommerce-technician on 9/20/15.
 */
angular.module('NodeTechApp')

    .controller('IndexController', function($scope, page){
      $scope.page = page;

        $scope.list = [];
        $scope.text = 'hello';
        $scope.submit = function() {
            if ($scope.text) {
                $http.get({
                }, function(response){

                });
                $scope.list.push(this.text);
                $scope.text = '';
            }
        };
        var chart1 = {};
        chart1.type = "google.charts.Line";
        chart1.displayed = false;
        chart1.data = {
            "cols": [{
                id: "month",
                label: "Month",
                type: "string"
            }, {
                id: "laptop-id",
                label: "Laptop",
                type: "number"
            }, {
                id: "desktop-id",
                label: "Desktop",
                type: "number"
            }, {
                id: "server-id",
                label: "Server",
                type: "number"
            }, {
                id: "cost-id",
                label: "Shipping",
                type: "number"
            }],
            "rows": [{
                c: [{
                    v: "January"
                }, {
                    v: 19,
                    f: "42 items"
                }, {
                    v: 12,
                    f: "Ony 12 items"
                }, {
                    v: 7,
                    f: "7 servers"
                }, {
                    v: 4
                }]
            }, {
                c: [{
                    v: "February"
                }, {
                    v: 13
                }, {
                    v: 1,
                    f: "1 unit (Out of stock this month)"
                }, {
                    v: 12
                }, {
                    v: 2
                }]
            }, {
                c: [{
                    v: "March"
                }, {
                    v: 24
                }, {
                    v: 5
                }, {
                    v: 11
                }, {
                    v: 6
                }

                ]
            }]
        };

        chart1.options = {
            "title": "Sales per month",
            "isStacked": "true",
            "fill": 20,
            "displayExactValues": true,
            "vAxis": {
                "title": "Sales unit",
                "gridlines": {
                    "count": 10
                }
            },
            "hAxis": {
                "title": "Date"
            }
        };
        $scope.myChart = chart1;
    }).value('googleChartApiConfig', {
        version: '1.1',
        optionalSettings: {
            packages: ['line'],
            language: 'en'
        }

  });