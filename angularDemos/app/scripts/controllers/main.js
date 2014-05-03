'use strict';

angular.module('angularDemosApp')
  .controller('MainCtrl', function ($rootScope,$scope,$translate,$translatePartialLoader) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $translatePartialLoader.addPart('mainpage');
	$translate.refresh();

  	$rootScope.$on('$translateChangeSuccess', function () {
	    $translate('VARIABLE_REPLACEMENT2').then(function (VARIABLE_REPLACEMENT2) {
	      $scope.VARIABLE_REPLACEMENT2 = VARIABLE_REPLACEMENT2;
	    });
	});

  });
