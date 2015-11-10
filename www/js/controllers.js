angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicPopup, $sce) {

     // An alert dialog
  /* $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Hola!',
       template: 'Bienvenido a Mali Accesorios'
     });
   };*/

//document.getElementById('iframeList').contentWindow.document.getElementById('nameDoc').innerHTML


   window.uploadDone=function(){
   // alert("cargó iframe");
   }

/*var flag = 0;
   window.uploadDone=function(){
  /* have access to $scope here*
  	flag = 1;
     var alertPopup = $ionicPopup.alert({
       title: 'Onload!',
       template: 'Comprueba tu conexión de red'
     });
   }
   if(flag==0){
     var alertPopup = $ionicPopup.alert({
       title: 'NOT onload!',
       template: 'Comprueba tu conexión de red'
     });


   }*/



})
.controller('embedContactCtrl', function($scope) {})


.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

