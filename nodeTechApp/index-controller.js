/**
 * Created by ecommerce-technician on 9/20/15.
 */
angular.module('NodeTechApp')

    .controller('IndexController', function($scope, $http, $rootScope,$state, $stateParams, page, quote, lookup, news){
        $scope.page = page;

        $scope.text = 'sbux';

        //$scope.interactivePositions = interactive.data.Positions;
        //$scope.interactiveDates = interactive.data.Dates;

        $scope.lookup = lookup;
        $scope.quote = quote;
        $scope.news = news;

        //$scope.comboBox = [];

        $scope.submit = function() {
            if ($scope.text) {
                $state.go('root.index', {myParam : this.text});
            }
        };

  });