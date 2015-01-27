/**
 * Created by jaric on 20.01.2015.
 */

(function (angular, window){

    "use strict";

    console.log("angTest", angular);

    var jApp = angular.module('jApp', ['ui.bootstrap']);
    console.log("jApp", jApp);

    jApp.controller('jController', ['$scope', '$http', function($scope, $http) {

        $scope.$watch('name',function(newValue, oldValue){
            console.log('name changed to', newValue, 'from', oldValue);
            if (oldValue === undefined) $scope.nameChanged = false;
            else $scope.nameChanged = true;
        },false);

        function chunk(arr, size) {
            var newArr = [];
            for (var i=0; i<arr.length; i+=size) newArr.push(arr.slice(i, i+size));
            return newArr;
        }
        function getData() {
            $http.get('/data').success(function(data, status, headers, config) {
                $scope.data = data;
                $scope.dataSaved = data;

                console.log(data);

                $scope.chunkedData = chunk(data, 3);
            });
        }
        getData();

        $scope.onlyNumbers = /^\d+$/;
        $scope.getPhotos = function(id) {
            console.log(id);
            if (id !== undefined){
                $scope.inputId = parseInt(id);
                $http.get('/photos/' + id).success(function(data, status, headers, config) {
                    $scope.data = data;
                    console.log(data);

                    $scope.chunkedData = chunk(data, 3);
                });
            }
        };

    }]);

})(angular, window);