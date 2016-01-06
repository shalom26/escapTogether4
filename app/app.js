'use strict';

// Declare app level module which depends on views, and components
angular.module('etGame', [
  'ngRoute',
  'etGame.home',
  'etGame.chals',
  'etGame.chal',
  'etGame.common'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}])

.run(function(SceneFactory){

})
