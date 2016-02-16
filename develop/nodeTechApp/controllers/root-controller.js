angular.module('NodeTechApp')

    .controller('RootController', function($scope, user, meta){
        $scope.user = user;
        $scope.meta = meta;
    });
