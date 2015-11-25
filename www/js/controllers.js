/* global angular, document, window */
angular.module('starter.controllers', [])

.controller('AppCtrl', function($state, $ionicPopup, $scope, $ionicModal, $ionicPopover, $timeout,  $location,  ionicMaterialInk, ionicMaterialMotion) {
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.blind();
},0);

  window.isConection=function(){
        //Check if there is internet conection :)
if(window.Connection) {

    
    if(navigator.connection.type == Connection.NONE) {
        var frame = document.getElementById("iframe"),
        frameDoc = frame.contentDocument || frame.contentWindow.document;
        frameDoc.documentElement.innerHTML = '<h1>Fallo de conexión</h1>';
        var alertPopup = $ionicPopup.alert({
         title: 'No hay Internet!',
         template: 'Comprueba tu conexión de red'
     });
        alertPopup.then(function(res) {
            //ionic.Platform.exitApp(); 
            //window.location = "#/app/preloader";
            //$ionicLoading.show({
                   // template: '<img src="img/preloader.GIF"></img>'

                    // '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
                    
                //});
        });
}

}
}

    // Form data for the login modal
    $scope.loginData = {};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

   /* var fab = document.getElementById('fab');
    fab.addEventListener('click', function() {
        return window && window.alert ? window.alert('you clicked the FAB!') : undefined;
    });*/

$scope.popover = $ionicPopover.fromTemplateUrl('templates/opciones.html', {
    scope: $scope
}).then(function(popover) {
    $scope.popover = popover;
});
$scope.closePopover = function() {
    $scope.popover.hide();
};
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
})

.controller('InkCtrl', function($scope, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
})

.controller('ComponentsCtrl', function($scope, $stateParams,  ionicMaterialInk, ionicMaterialMotion, $timeout) {

  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
},0);

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
})

.controller('ListsCtrl', function($scope, $stateParams,  ionicMaterialMotion) {

    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var j = 0; j < done.length; j++) {
            done[j].classList.remove('done');
            done[j].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var k = 0; k < ionList.length; k++) {
            var toRemove = ionList[k].className;
            if (/animate-/.test(toRemove)) {
                ionList[k].className = ionList[k].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

    $scope.ripple = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
        setTimeout(function() {
            ionicMaterialMotion.ripple();
        }, 500);
    };

    $scope.fadeSlideInRight = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideInRight();
        }, 500);
    };

    $scope.fadeSlideIn = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideIn();
        }, 500);
    };

    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds();
        }, 500);
    };

    $scope.blinds();

})

.controller('SetupCtrl', function($scope, $stateParams) {
    /* ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
*/
})

.controller('ExtensionsCtrl', function($scope, $stateParams, $ionicActionSheet, $timeout, $ionicLoading, $ionicModal, $ionicPopup,  ionicMaterialInk) {

    // Triggered on a button click, or some other target
    $scope.actionSheet = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [{
                text: '<b>Share</b> This'
            }, {
                text: 'Move'
            }],
            destructiveText: 'Delete',
            titleText: 'Modify your album',
            cancelText: 'Cancel',
            cancel: function() {
                // add cancel code..
            },
            buttonClicked: function(index) {
                return true;
            }
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            hideSheet();
        }, 2000);

    };

    $scope.loading = function() {
        $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            $ionicLoading.hide();
        }, 2000);
    };

    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
        $timeout(function () {
            $scope.modal.hide();
        }, 2000);
    };
    // Cleanup the modal when we're done with it
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    // Popover
    $scope.popover = function() {
        $scope.$parent.popover.show();
        $timeout(function () {
            $scope.$parent.popover.hide();
        }, 2000);
    };

    // Confirm
    $scope.showPopup = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'You are now my subscribed to Cat Facts',
            template: 'You will meow receive fun daily facts about CATS!'
        });

        $timeout(function() {
            ionicMaterialInk.displayEffect();
        }, 0);
    };

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
})

.controller('MotionCtrl', function($scope, $stateParams, $timeout,  ionicMaterialMotion, ionicMaterialInk) {
    var fab = document.getElementById('fab');

    $scope.moveFab = function(dir) {
        fab.style.display = 'none';
        fab.className = fab.className.replace('button-fab-top-left', '');
        fab.className = fab.className.replace('button-fab-top-right', '');
        fab.className = fab.className.replace('button-fab-bottom-left', '');
        fab.className = fab.className.replace('button-fab-bottom-right', '');
        fab.className += ' button-fab-' + dir;
        $timeout(function() {
            fab.style.display = 'block';
        }, 100);
    };

    $scope.motionFab = function(type) {
        var shouldAnimate = false;
        var classes = type instanceof Array ? type : [type];

        function toggleMotionClass (theClass) {
            $timeout(function() {
                fab.classList.toggle(theClass);
            }, 300);
        }

        for (var i = 0; i < classes.length; i++) {
            fab.classList.toggle(classes[i]);

            shouldAnimate = fab.classList.contains(classes[i]);
            if (shouldAnimate) {
                (toggleMotionClass)(classes[i]);
            }
        }
    };

    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var j = 0; j < done.length; j++) {
            done[j].classList.remove('done');
            done[j].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var k = 0; k < ionList.length; k++) {
            var toRemove = ionList[k].className;
            if (/animate-/.test(toRemove)) {
                ionList[k].className = ionList[k].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

    $scope.ripple = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
        setTimeout(function() {
            ionicMaterialMotion.ripple();
        }, 500);
    };

    $scope.fadeSlideInRight = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideInRight();
        }, 500);
    };

    $scope.fadeSlideIn = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideIn();
        }, 500);
    };

    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds();
        }, 500);
    };

    $scope.blinds();
    ionicMaterialInk.displayEffect();
});
