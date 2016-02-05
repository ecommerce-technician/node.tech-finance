/**
 * Created by alex on 9/20/15.
 */
angular.module('NodeTechApp')
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);  //Remove # in angular urls.

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('root', { //here we resolve all the application wide stuff.
                url: '',
                controller: 'RootController',
                template: '<ui-view id="rootView"></ui-view>',
                resolve: {
                    user: function () {
                        return {name: 'dummyUser', age: 50};
                    },

                    meta: function () {
                        return {title: 'Node.Tech Finance'};
                    }
                }
            })

            .state('root.index', {
                url: '/?ticker',
                templateUrl: 'partials/index.html',
                controller: 'IndexController',
                resolve : {
                    lookup : function(GetTicker, $stateParams){
                        return GetTicker.getInfo($stateParams.ticker);
                    },
                    interactive : function(GetTicker, $stateParams){
                        return GetTicker.getInteractive($stateParams.ticker);
                    },
                    quote : function(GetTicker, $stateParams){
                        return GetTicker.getQuote($stateParams.ticker);
                    },
                    news : function(GetTicker, $stateParams){
                        return GetTicker.getNews($stateParams.ticker);
                    },
                    page : function(){
                        return {
                            headline : 'welcome to node tech finance!'
                        };
                    },
                    tweets : function(GetTicker, $stateParams){
                        return GetTicker.getTweets($stateParams.ticker);
                    }
                }
            });
    }]);