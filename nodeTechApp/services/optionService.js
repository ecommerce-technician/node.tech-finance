/**
 * Created by alex on 12/17/15.
 */


angular.module('NodeTechApp')
    .service('Options', ['$http', function($http){

    function getOptions() {
        return $http({
            method: 'GET',
            url: '/api/v1/read/options'
        });
    }

    return {
        options : getOptions
    };

}]);