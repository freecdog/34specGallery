/**
 * Created by jaric on 02.02.2015.
 */

(function (angular, window){

    "use strict";

    console.log("angTest", angular);

    var jApp = angular.module('jAppBootstrap', []);
    console.log("jAppBootstrap", jApp);

    jApp.controller('jControllerBootstrap', ['$scope', '$http', function($scope, $http) {
        $scope.test = function(){
            console.log(123);
        };
    }]);


})(angular, window);
