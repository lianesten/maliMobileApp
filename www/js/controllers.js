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
//Usamos esta bandera para saber si el iframe es cargado o no
var flag = false;
   window.uploadDone=function(){
/*
var iframe = document.getElementById("awc_frame");
var iframe_contents = iframe.contentDocument.body.innerHTML;
alert(iframe_contents);
*/
    //=============================
  //  var contenido = document.getElementById("iframe").contentWindow;
    //alert(contenido);
   /* flag = true;
    alert("flag="+flag);*/
  // have access to $scope here*
     /*var alertPopup = $ionicPopup.alert({
       title: 'Onload!',
       template: 'Comprueba tu conexión de red'
     });*/
   }
   // sleep(5000);
     /*setTimeout(function(){
      alert("timeFunction");
      if(flag==false){
        alert("flag="+flag);
        document.getElementById("iframe").style.display = "none";

      }

    }, 3000)*/



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

