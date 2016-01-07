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
                    //console.log('msg.data.sceneId',msg.data.sceneId);
                    console.log('currScene',currScene);
                    GameFactory.changeUserScene(msg.data.sceneId);

                } else if (msg.data.poiId){
                    console.log('msg.data.poiId',msg.data.poiId);
                    GameFactory.poiClicked(msg.data.poiId);
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