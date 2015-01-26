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

        function getData() {
            $http.get('/data').success(function(data, status, headers, config) {
                $scope.data = data;
                console.log(data);

                function chunk(arr, size) {
                    var newArr = [];
                    for (var i=0; i<arr.length; i+=size) newArr.push(arr.slice(i, i+size));
                    return newArr;
                }
                $scope.chunkedData = chunk(data, 3);

            });
        }
        getData();

        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        $scope.addSlide = function() {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: 'http://placekitten.com/' + newWidth + '/300',
                text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
            });
        };

    }]);

})(angular, window);