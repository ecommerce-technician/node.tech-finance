angular.module('NodeTechApp', ['ui.router','ngCookies','ngResource','ngMessages','ngMaterial', 'googlechart'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('brown')
            .backgroundPalette('grey')
            .warnPalette('red');
    })
    .run(function ($rootScope) {
        "use strict";

        $rootScope.$on('$stateChangeSuccess', function (toState, toParams, fromState, fromParams) {
            console.log('state change success',toState);
        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            console.error('state change error', error);
        });
    });

