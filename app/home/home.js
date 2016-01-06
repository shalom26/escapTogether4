

angular.module('etGame.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl as vm'
        });
    }])

    .controller('HomeCtrl',function(GameFactory, $location) {
        this.user={};
        this.add = function(){
            GameFactory.addUser(this.user);
            $location.path('/chals');
        }

    });