(function() {
'use strict';

angular.module('lunchApp',[])

.controller('lunchController', lunchController);

lunchController.$inject= ['$scope'];
function lunchController($scope) {

  $scope.value= "";
  // $scope.checkLunch = function(){
  //   return $scope.lunch();
  // };

  $scope.lunch= function () {
      var splitted= $scope.value.split(",")
      splitted= splitted.filter(Boolean)
      //console.log(splitted);
      $scope.lunchOutput="";
      switch (true) {
        case (splitted.length > 3):
          $scope.lunchOutput= "Too Much!";
          break;
        case (splitted.length <= 3 && splitted.length != 0):
          $scope.lunchOutput= "That's Good";
          break;
        default:
          if (splitted.length == 0) {
            $scope.lunchOutput= "You've Got to Enter Something!";
            break;
          }
      }
      //return
    }
    //console.log($scope.lunch());

  };


})();
