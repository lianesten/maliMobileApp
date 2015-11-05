// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    app.receivedEvent('deviceready');
    
    PushBotsPlugin.initializeAndroid('5577109c177959db1d8b4567','483409914041');  
      
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})



app.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

  //Se asigna el sitio web a embeber desde el iframe
  $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://maliaccesorios.com/']);
  $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6528930159919!2d-75.58687299999997!3d6.182711000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnNTcuOCJOIDc1wrAzNScxMi43Ilc!5e0!3m2!1ses-419!2sco!4v1436218838254']);
  $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://v2.zopim.com/widget/livechat.html?key=2lgLHPgIdOriBLzrdpmWzqsGHmf5B0ss&mid=XJf2n0Cl7QI6U8&lang=es-es&hostname=maliaccesorios.com&api_calls=%5B%5B"setStatus"%2C%5Bnull%5D%5D%2C%5B"setStatus"%2C%5Bnull%5D%5D%5D']);
  $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://maliaccesorios.com/index.php/iniciomobile.html']);
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider 

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/menu.html"
  })
  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

  .state('tab.collares', {
      url: '/collares',
      views: {
        'tab-chats': {
          templateUrl: 'templates/collares.html'
        }
      }
    })

    .state('tab.pulseras', {
      url: '/pulseras',
      views: {
        'tab-chats': {
          templateUrl: 'templates/pulseras.html'
        }
      }
    })

    .state('tab.aretes', {
      url: '/aretes',
      views: {
        'tab-chats': {
          templateUrl: 'templates/aretes.html'
        }
      }
    })

    .state('tab.complementos', {
      url: '/complementos',
      views: {
        'tab-chats': {
          templateUrl: 'templates/complementos.html'
        }
      }
    })


  .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.account-formContact',{
    url: 'formContact',
          views: {
        'tab-account': {
          templateUrl: 'templates/tab-formContact.html'
        }
      }
  })

  .state('tab.location',{
    url: '/ubicacion',
          views: {
        'tab-account': {
          templateUrl: 'templates/location.html'
        }
      }
  })

    .state('tab.chatOnline',{
    url: '/chatOnline',
          views: {
        'tab-account': {
          templateUrl: 'templates/chatOnline.html'
        }
      }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
