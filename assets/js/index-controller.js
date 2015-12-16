/**
 * Created by alex on 9/20/15.
 */
angular.module('NodeTechApp')

    .controller('IndexController', ['$mdDialog', '$mdSidenav', '$scope', '$cookies', '$http', '$sce', function($mdDialog, $mdSidenav, $scope, $cookies, $http, $sce){
    	$scope.alive = "";
    	$scope.$sce = $sce;
    	$scope.page = {
    		title : "Node.Tech - Ecommerce!"
    	}
    	$http({
		  method: 'GET',
		  url: '/api/v1/read/tickers'
		}).then(function successCallback(response) {
			$scope.tickers = response.data;
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });


     $scope.items = [];  
     $scope.search = function() {        
            $http({method: 'JSONP', url: 'http://suggestqueries.google.com/complete/search?callback=&hl=em&ds=yt&jsonp=suggestCallBack&q=' + $scope.searchTerms + '&client=youtube'}).
              success(function(data, status) {
                $scope.items = suggestCallBack;
              }).
              error(function(data, status) {
                console.log(data || "Request failed");
            });

            suggestCallBack = function (data) {
               var suggestions = data[0,1];
               var trendsQuery = '';
               $scope.listAll = suggestions;
               for (index = 1; index < suggestions.length; ++index) {
               	$scope.items.push(suggestions[index][0]);
               	trendsQuery += suggestions[index][0] + ',';
               }
               $scope.trendsURL = $sce.trustAsResourceUrl('http://www.google.com/trends/fetchComponent?hl=en-US&cid=TIMESERIES_GRAPH_0&export=5&q=' + trendsQuery);
            }	     
     }
	}]);

