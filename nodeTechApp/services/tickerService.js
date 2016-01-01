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


        function getData(searchParam) {
            return $http.get('/api/v1/markit/search/interactive/' + searchParam).then(function (data) {
                return data.data[0];
            }, null);
        }

        return {
            getInfo: getInfo,
            getData: getData,
            myPublicVar: myPublicVar
        };
    });
