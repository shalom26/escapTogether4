/**
 * Created by Shalom on 1/3/2016.
 */


angular.module('etGame.chals', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/chals', {
            templateUrl: 'chals/chals.html',
            controller: 'ChalsCtrl as vm',

        });
    }])

    .controller('ChalsCtrl',function(ChalsFactory) {
        this.chals = ChalsFactory.query();

    });

