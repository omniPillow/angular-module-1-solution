(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope','$filter'];

function LunchCheckController($scope){
  $scope.checkMessage = "";
  $scope.lunchItems = "";
  $scope.lunchCheckStyle = {};
  var redStyle = {
        'color':'red',
        'border-style':'solid',
        'border-color':'red',
        'display':'inline'
        };
  var greenStyle = {
        'color':'green',
        'border-style':'solid',
        'border-color':'green',
        'display':'inline'
        };
  $scope.checkLunchItem = function(){
    var returnMessage = updateMessage($scope.lunchItems);
    $scope.checkMessage = returnMessage;
  }

  function updateMessage(string){
    var itemArray = [];
    var itemNum = 0;
    var returnString = "";
    itemArray = string.split(',');
    for(var i = 0; i < itemArray.length; i++){
      if(itemArray[i].trim()){
        itemNum++;
      }
    }

    if(itemNum == 0){
      returnString = "Please enter data first";
      $scope.lunchCheckStyle.style =redStyle;
    }else if((itemNum > 0 )&&(itemNum < 4)){
      returnString = "Enjoy!"
      $scope.lunchCheckStyle.style = greenStyle;
    }else if(itemNum >= 4){
      returnString = "Too much!"
      $scope.lunchCheckStyle.style = greenStyle;
    }
    return returnString;
  }

}

})();
