/**
 * Created by Shalom on 1/3/2016.
 */
(function(){

    angular.module('etGame.common')

        .factory('SceneFactory',function($rootScope, BagFactory, GameFactory){
                var currScene = 'pondCube' ;
            window.addEventListener('message', function (msg) {
                //console.log('msg is: ', msg);
                if (msg.data.itemId) {
                    BagFactory.addItem(msg.data.itemId);
                } else  if (msg.data.sceneId) {
                    currScene = msg.data.sceneId ;
                    console.log('msg.data.sceneId',msg.data.sceneId);
                    GameFactory.changeUserScene(msg.data.sceneId);
                    //console.log('UserScene',GameFactory.getCurrSceneId());
                    //console.log('users',GameFactory.getUsersInCurrScene());
                }
                $rootScope.$apply();
            });



            return {
                getCurrScene: function () {
                    return currScene ;

                }

            }
        });
})();