angular.module('NodeTechApp', ['ngRoute', 'ngCookies', 'ngResource', 'ngMessages', 'ngMaterial'])
    .config(['$mdThemingProvider', function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('pink')
            .backgroundPalette('grey')
            .warnPalette('red');
    }])

