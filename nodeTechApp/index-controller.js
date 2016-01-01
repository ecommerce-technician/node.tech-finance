/**
 * Created by ecommerce-technician on 9/20/15.
 */
angular.module('NodeTechApp')

    .controller('IndexController', function($scope, $http, page, quote, lookup, interactive){
        $scope.page = page;

        $scope.text = 'sbux';

        //$scope.interactivePositions = interactive.data.Positions;
        //$scope.interactiveDates = interactive.data.Dates;
        $scope.quote = quote;

        //$scope.comboBox = [];

        $scope.lookup = lookup;

        $scope.submit = function() {
            if ($scope.text) {

            }
        };



  });