
angular.module('etGame.chal', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/chal:chalId', {
            templateUrl: 'chal/chal.html',
            controller: 'ChalCtrl as vm'
        });
    }])
.controller('ChalCtrl',function(GameFactory){



});