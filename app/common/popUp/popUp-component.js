(function(){

  angular.module('etGame.common')

    .component('popUp',{
      restrict: 'E',
      transclude: true,
      templateUrl: 'common/popUp/popUp.html',
      controller: function (GameFactory) {
        GameFactory.popUpClick();
      }
    })
})();
