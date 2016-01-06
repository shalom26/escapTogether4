/**
 * Created by Shalom on 1/3/2016.
 */
(function(){

    angular.module('etGame.common')

        .factory('GameFactory',function(){
            // Sample User object: {name,gender,roomId}
            var currUser = {};
            var users = [];
            var initialRoomId ='pondCube';


            var itemToTarget = {1001: 2007};




            return {
                addUser: function(user){
                    user.sceneId = initialRoomId;
                    if (users.length === 0) currUser = user;
                    users.push(user);
                    console.log('Added user', users);
                },
                getUsersInCurrScene: function () {
                  return users;
                },
                changeUserScene : function(sceneId) {
                    currUser.sceneId = sceneId
                },

                getCurrSceneId: function () {
                    return currUser.sceneId;
                }


            }
        });
})();