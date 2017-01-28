angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.datas = [
    {
      'id' : 1,
      'prenom' : 'Clément',
      'nom' : 'Ignacio',
      'date' : '15 Janvier 2017',
      'pts' : 200,
      'img_user' : 'img/clem.jpg',
      'img_photo' : 'img/peche1.jpg',
      'type' : 'Bar',
      'poids' : 15,
      'taille': 120,
      'lieu' : 'Vannes',
      'description' : 'Journée incroyable ! Regardez ce magnifique poisson ;)',
      'like' : 1,
      'comment' : 5
    },
    {
      'id' : 4,
      'prenom' : 'Decathlon',
      'type' : 'Contenu Sponsorisé',
      'img_user' : 'img/decathlon.jpg',
      'img_photo' : 'img/leurres.jpg',
      'prix' : '11.80',
      'description' : 'LEURRE COULANT AUTAIN JMS 130S NATURALLY SKIN - 13CM - 27G',
      'link' : 'https://lc.cx/JGGQ',
      'link_title' : 'https://lc.cx/JGGQ',
      'publicite' : true
    },
    {
      'id' : 2,
      'prenom' : 'Glenn',
      'nom' : 'Guegan',
      'date' : '14 Janvier 2017',
      'pts' : 170,
      'img_user' : 'img/glenn.jpg',
      'img_photo' : 'http://www.1max2peche.com/wp-content/uploads/2015/10/carpe-record-france-04.jpg',
      'type' : 'Carpe',
      'poids' : 35,
      'taille': 170,
      'lieu' : 'Brest',
      'description' : 'Pas mal, non ?',
      'like' : 4,
      'comment' : 2
    },
    {
      'id' : 3,
      'prenom' : 'Adrien',
      'nom' : 'Fernandes',
      'date' : '14 Janvier 2017',
      'pts' : 'Over 9000',
      'img_user' : 'img/adrien.jpg',
      'img_photo' : 'https://static.pratique.fr/images/unsized/pe/peche-maquereau.jpg',
      'type' : 'Maquereau',
      'poids' : 0.3,
      'taille': 30,
      'lieu' : 'Cherbourg',
      'description' : 'Ma seule prise de la journée :/',
      'like' : 'Over 9000',
      'comment' : 'Over 9000'
    }
  ];
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AuthCtrl', function($scope, $state){
  $scope.user = {
    email: null,
    password: null
  };
  $scope.submit = function(){
    $state.go('tab.dash');
    console.log($scope.user);
  }
})

.controller('PictureCtrl', function($scope, $state){
  $scope.goTo = function(){
    $state.go('board');
  }
  console.log("Loaded");
})
.controller('BoardCtrl', function($scope, $state){
  console.log('BoardCtrl loaded');
})
;
