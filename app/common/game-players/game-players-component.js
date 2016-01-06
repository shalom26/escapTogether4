(function () {


    angular.module('etGame.common')

        .directive('gamePlayers', function ($rootScope,GameFactory,SceneFactory) {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'common/game-players/game-players.html',
                controllerAs: 'vm',
                controller: function ($routeParams) {
                    var ctrl = this;
                    this.sceneId = SceneFactory.getCurrScene();
                    console.log('sceneId',this.sceneId);
                    $rootScope.$watch(function () {
                        return SceneFactory.getCurrScene();
                    },function(newVal,oldVal){
                       if (newVal !== oldVal ) {
                           ctrl.sceneId = newVal;
                           console.log('newVal',newVal);
                       }
                    });
                    console.log('SceneFactory',SceneFactory.getCurrScene());
                    this.usersInScene = GameFactory.getUsersInCurrScene();
                    this.addUser = function () {
                        console.log('SceneFactory',SceneFactory.getCurrScene())
                        GameFactory.addUser({name: 'test', gender: 'M'});
                    }
                }
            };

        });

})();
