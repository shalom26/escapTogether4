(function () {


    angular.module('etGame.common')

        .directive('gamePlayers', function ($rootScope,GameFactory,SceneFactory) {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'common/game-players/game-players.html',
                controllerAs: 'vm',
                controller: function ($routeParams) {
                    this.sceneId = SceneFactory.getCurrScene();
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
