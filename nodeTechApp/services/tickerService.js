/**
 * Created by alex on 12/31/15.
 */
angular.module('NodeTechApp')
    .service('GetOptionsData', function ($http) {
        return {
            get: function (callback) {
                $http.get('/api/v1/read/options').success(function (data) {
                    // prepare data here
                    callback(data);
                });
            }
        };
    })

    .service('GetTickerCorrect', function ($http) {

        var myPublicVar = 'im public';

        function getInfo(searchParam) {
            return $http.get('/api/v1/markit/search/' + searchParam).then(function (data) {
                return data.data[0];
            }, null);
        }

        function getInteractive(searchParam) {
            return $http.get('/api/v1/markit/search/interactive/' + searchParam).then(function (data) {
                return data;
            }, null);
        }

        function getQuote(searchParam) {
            return $http.get('/api/v1/markit/search/quote/' + searchParam).then(function (data) {
                return data;
            }, null);
        }

        function getNews(searchParam) {
            return $http.get('/api/v1/google-news/search/' + searchParam).then(function (data) {
                return data;
            }, null);
        }

        function getTweets(searchParam) {
            return $http.get('/api/v1/twitter/search/' + "$" + searchParam).then(function (data) {
                return data;
            }, null);
        }

        return {
            getInfo: getInfo,
            getInteractive: getInteractive,
            getQuote: getQuote,
            getNews: getNews,
            getTweets: getTweets,
            myPublicVar: myPublicVar
        };
    });
