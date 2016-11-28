(function() {
'use strict';

angular.module('lunchApp',[])

.controller('lunchController', lunchController);

lunchController.$inject= ['$scope'];
function lunchController($scope) {

  $scope.value= "";
  $scope.checkLunch = function(){
    $scope.lunch();
  };

  $scope.lunch= function () {
    var splitted= $scope.value.split(",")
    splitted= splitted.filter(Boolean)
    console.log(splitted);
    if (splitted.length > 3) {
        return "Too much";
    } else {
      return "Very Good!";
    }

  };

  };


})();
