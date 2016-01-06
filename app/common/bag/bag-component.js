(function(){


  angular.module('etGame.common')

  .directive('bag',function(BagFactory,SceneFactory){
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'common/bag/bag.html',
      link:function($scope){


        
        $scope.addItem = function(item){
          BagFactory.addItem(item);
          console.log(item);
        };

          $scope.items = BagFactory.all();

          $scope.itemSelect = function(itemId){
          SceneFactory.itemInhande(itemId);

          $scope.itemIdShow = itemId;
          $scope.Itemshow = true ;
          console.log('itemSelected',itemId);

        }
      }

    };

  });

})();
