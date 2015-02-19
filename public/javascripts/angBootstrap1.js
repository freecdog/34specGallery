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

    angular.module('jAppBootstrap').controller('DropdownCtrl', function ($scope, $log) {
        $scope.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
    });


})(angular, window);
