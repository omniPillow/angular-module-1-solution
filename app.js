(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope','$filter'];

function LunchCheckController($scope){
  $scope.checkMessage = "something";
  $scope.lunchItems = "empty";




}

})();
