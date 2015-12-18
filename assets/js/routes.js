/**
 * Created by alex on 9/20/15.
 */
angular.module('NodeTechApp')
    .config( ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl:'partials/index.html',
                controller: 'IndexController',
                controllerAs: 'indexCtrl'
            })
    }]);