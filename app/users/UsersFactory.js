/**
 * Created by Shalom on 1/3/2016.
 */


angular.module('myApp.UsersFactory', [])

    .factory('UsersFactory',function(){
        var users =[];
        return {
            all: function () {
                return users;
            },
            remove: function (user) {
                users.splice(users.indexOf(user), 1);
            },
            addUser: function(user){
                users.push(user);
                console.log('users: ', users);
            }
        };
    });