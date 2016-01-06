(function(){




  //$scope.items = BagFactory.all();
  //$scope.$apply();
  //console.log('items',$scope.items);
  //console.log('msg', msg.data);



  var module = angular.module('etGame.common')


  module.factory('BagFactory',function(){
      var items =[
        {id: 1001}

      ];


      return {

        all: function () {
          return items;
        },
        addItem: function(itemId) {

            items.push({id: itemId});
            console.log('items',items);

        }
      };


    });

})();


