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
                        return {title: 'Node.Tech - Basic!'};
                    }
                }
            })

            .state('root.index', {
                url: '/?ticker',
                templateUrl: 'partials/index.html',
                controller: 'IndexController',
                resolve : {
                    lookup : function(GetTickerCorrect, $stateParams){
                        return GetTickerCorrect.getInfo($stateParams.ticker);
                    },
                    interactive : function(GetTickerCorrect, $stateParams){
                        return GetTickerCorrect.getInteractive($stateParams.ticker);
                    },
                    quote : function(GetTickerCorrect, $stateParams){
                        return GetTickerCorrect.getQuote($stateParams.ticker);
                    },
                    news : function(GetTickerCorrect, $stateParams){
                        return GetTickerCorrect.getNews($stateParams.ticker);
                    },
                    page : function(){
                        return {
                            headline : 'welcome to node tech!'
                        };
                    }
                }

            });
    }]);