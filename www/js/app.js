// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic-material', 'starter.controllers'])

.run(function($ionicPlatform,$ionicPopup) {
    $ionicPlatform.ready(function() {
        //Registro de las notificaciones con Google Cloud Message
        //PushbotsPlugin.initializeAndroid("PUSHBOTS_APP_ID", "GCM_SENDER_ID");
        PushbotsPlugin.initializeAndroid("5577109c177959db1d8b4567", "483409914041");
        //alert("pass");
        //Check if there is internet conection :)
            if(window.Connection) {
                   if(navigator.connection.type == Connection.NONE) {
                    var alertPopup = $ionicPopup.alert({
                     title: 'No hay Internet!',
                     template: 'Comprueba tu conexión de red para un adecuado funcionamiento.'
                 });
                }
            }
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

.controller('ubicacionMapaCtrl', function($scope, $ionicLoading) {
 
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        /*navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });*/
 
        $scope.map = map;
    });
 
})

.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://maps.googleapis.com/maps/api/js?key=AIzaSyBQXzmkS5EwFgJ1Jpvkyqg3eRseP_LUz_A&sensor&sensor=true']);
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
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

    //Estado para la coleccion nueva
    .state('app.coleccionNueva', {
        url: '/coleccionNueva',
        views: {
            'menuContent': {
                templateUrl: 'templates/coleccionNueva.html',
                controller: 'coleccionNuevaCtrl'
            }
        }
    })

    //Estado para collares 
    .state('app.collares', {
        url: '/collares',
        views: {
            'menuContent': {
                templateUrl: 'templates/collares.html',
                controller: 'collaresCtrl'

            }
        }
    })

    //Estado para pulseras 
    .state('app.pulseras', {
        url: '/pulseras',
        views: {
            'menuContent': {
                templateUrl: 'templates/pulseras.html',
                controller: 'pulserasCtrl'
            }
        }
    })

    //Estado para aretes 
    .state('app.aretes', {
        url: '/aretes',
        views: {
            'menuContent': {
                templateUrl: 'templates/aretes.html',
                controller: 'aretesCtrl'
            }
        }
    })

    //Estado para complementos 
    .state('app.complementos', {
        url: '/complementos',
        views: {
            'menuContent': {
                templateUrl: 'templates/complementos.html',
                controller: 'complementosCtrl'
            }
        }
    })

    //Estado para el mapa de ubicacion
    .state('app.ubicacionMapa', {
        url: '/ubicacionMapa',
        views: {
            'menuContent': {
                templateUrl: 'templates/ubicacionMapa.html',
                controlller: 'ubicacionMapaCtrl'
            }
        }
    })

    //Estado para el chat en linea
    .state('app.chatOnline', {
        url: '/chatOnline',
        views: {
            'menuContent': {
                templateUrl: 'templates/chatOnline.html',
                controller: 'chatOnlineCtrl'
            }
        }
    })

    //Estado para escribenos
    .state('app.escribenos', {
        url: '/escribenos',
        views: {
            'menuContent': {
                templateUrl: 'templates/escribenos.html',
                controller: 'escribenosCtrl'
            }
        }
    });

   /* //Estado para preloader
    .state('app.preloader', {
        url: '/preloader',
        views: {
            'menuContent': {
                templateUrl: 'templates/preloader.html'
            }
        }
    });    */

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
