angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.mARVEL', {
    url: '/MARVEL',
    views: {
      'tab1': {
        templateUrl: 'templates/mARVEL.html',
        controller: 'mARVELCtrl'
      }
    }
  })

  .state('tabsController.mARVELMOVIE', {
    url: '/MARVEL MOVIE',
	params: {
		marvelkey: ""		
},
    views: {
      'tab1': {
        templateUrl: 'templates/mARVELMOVIE.html',
        controller: 'mARVELMOVIECtrl'
      }
    }
  })

  .state('tabsController.dCMOVIE', {
    url: '/DC MOVIE',
	params: {
		dckey: ""		
},
    views: {
      'tab2': {
        templateUrl: 'templates/dCMOVIE.html',
        controller: 'dCMOVIECtrl'
      }
    }
  })

  .state('tabsController.dC', {
    url: '/DC',
    views: {
      'tab2': {
        templateUrl: 'templates/dC.html',
        controller: 'dCCtrl'
      }
    }
  })

  .state('tabsController.cHATROOM', {
    url: '/CHAT ROOM',
    views: {
      'tab3': {
        templateUrl: 'templates/cHATROOM.html',
        controller: 'cHATROOMCtrl'
      }
    }
  })

  .state('tabsController.rATEAPP', {
    url: '/RATE APP',
    views: {
      'tab4': {
        templateUrl: 'templates/rATEAPP.html',
        controller: 'rATEAPPCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/MARVEL')


});