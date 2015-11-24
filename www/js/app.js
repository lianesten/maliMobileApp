// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic-material', 'starter.controllers'])

.run(function($ionicPlatform,$ionicPopup) {
    $ionicPlatform.ready(function() {
        //Check if there is internet conection :)
            if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    var alertPopup = $ionicPopup.alert({
                     title: 'No hay Internet!',
                     template: 'Comprueba tu conexión de red para un adecuado funcionamiento de la App'
                 });
                }
            }



        //Registro de las notificaciones con Google Cloud Message
        PushbotsPlugin.initializeAndroid("5577109c177959db1d8b4567", "483409914041");
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.contact', {
        url: '/contact',
        views: {
            'menuContent': {
                templateUrl: 'templates/contact.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'MotionCtrl'
            }
        }
    })

    //Estado para el mapa de ubicacion
    .state('app.location', {
        url: '/mapLocation',
        views: {
            'menuContent': {
                templateUrl: 'templates/mapLocation.html'
            }
        }
    })

    //Estado para el chat en linea
    .state('app.chatOnline', {
        url: '/chatOnline',
        views: {
            'menuContent': {
                templateUrl: 'templates/chatOnline.html'
            }
        }
    })

    //Estado para escribenos
    .state('app.escribenos', {
        url: '/escribenos',
        views: {
            'menuContent': {
                templateUrl: 'templates/escribenos.html'
            }
        }
    })

    //Estado para la coleccion nueva
    .state('app.coleccionNueva', {
        url: '/coleccionNueva',
        views: {
            'menuContent': {
                templateUrl: 'templates/coleccionNueva.html'
            }
        }
    })

    //Estado para collares 
    .state('app.collares', {
        url: '/collares',
        views: {
            'menuContent': {
                templateUrl: 'templates/collares.html'
            }
        }
    })

    //Estado para pulseras 
    .state('app.pulseras', {
        url: '/pulseras',
        views: {
            'menuContent': {
                templateUrl: 'templates/pulseras.html'
            }
        }
    })

    //Estado para aretes 
    .state('app.aretes', {
        url: '/aretes',
        views: {
            'menuContent': {
                templateUrl: 'templates/aretes.html'
            }
        }
    })

    //Estado para complementos 
    .state('app.complementos', {
        url: '/complementos',
        views: {
            'menuContent': {
                templateUrl: 'templates/complementos.html'
            }
        }
    })

    //Estado para ofertas 
    .state('app.ofertas', {
        url: '/ofertas',
        views: {
            'menuContent': {
                templateUrl: 'templates/ofertas.html'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
