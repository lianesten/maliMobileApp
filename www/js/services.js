angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Collares',
    lastText: 'CADENA EN ORO GOLFIED Y PIEDRA MORADA',
    face: 'http://maliaccesorios.com/images/stories/virtuemart/product/image612.jpg'
  }, {
    id: 1,
    name: 'Aretes',
    lastText: 'SET MARINO DORADO',
    face: 'http://maliaccesorios.com/images/stories/virtuemart/product/fullsizerender-(9)7.jpg'
  }, {
    id: 2,
    name: 'Collares',
    lastText: 'CADENITA BUHO',
    face: 'http://maliaccesorios.com/images/stories/virtuemart/product/fullsizerender-(5)9.jpg'
  }, {
    id: 3,
    name: 'Complementos',
    lastText: 'PINZAS PAVONADAS TRIANGULO AZUL',
    face: 'http://maliaccesorios.com/images/stories/virtuemart/product/fullsizerender-(4)65.jpg'
  }, {
    id: 4,
    name: 'Collares',
    lastText: 'CADENITA NEGRA MANO HAMSA',
    face: 'http://maliaccesorios.com/images/stories/virtuemart/product/fullsizerender88.jpg'
  }, {
    id: 5,
    name: 'Complementos',
    lastText: 'TOBILLERA ROSA',
    face: 'http://maliaccesorios.com/images/stories/virtuemart/product/fullsizerender-(2)5.jpg'
  }, {
    id: 6,
    name: 'Collares',
    lastText: 'CADENA X 3 LAGRIMA VIDRIO',
    face: 'http://maliaccesorios.com/images/stories/virtuemart/product/fullsizerender-(3)3.jpg'
  }, {
    id: 7,
    name: 'Collares',
    lastText: 'CADENA COLMILLO Y TRIANGULO',
    face: 'http://maliaccesorios.com/images/stories/virtuemart/product/fullsizerender-(12)-(1).jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
