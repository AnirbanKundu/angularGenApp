'use strict';

var angularDemosApp =  angular
  .module('angularDemosApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angularDemosApp.config(['$translateProvider','$translatePartialLoaderProvider', function ($translateProvider,$translatePartialLoaderProvider) {
  $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: 'i18n/{lang}/{part}.json'
      });
    var userLaunguage = navigator.language || navigator.browserLanguage; //This is for IE.
    $translateProvider.preferredLanguage(userLaunguage.toLowerCase()); //de_DE -->keep this so that it easy to test for other languages de-DE --? GERMAN
}]);



