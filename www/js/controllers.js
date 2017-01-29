angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  $scope.showComment = -1;
  $scope.error_message = undefined;
  $scope.datas = [
    {
      'id' : 0,
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
      'comment' :  [
        {
          'id': 0,
          'author_prenom' : "Glenn",
          'author_nom' : "Guegan",
          'author_img' : "img/glenn.jpg",
          'content' : "Houa !! Belle prise !",
          'heure' : 'Il y a 8 minutes'
        }
    ]
    },
    {
      'id' : 1,
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
      'comment' : [

      ]
    },
    {
      'id' : 2,
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
      'id' : 3,
      'prenom' : 'Adrien',
      'nom' : 'Fernandes',
      'date' : '14 Janvier 2017',
      'pts' : '25',
      'img_user' : 'img/adrien.jpg',
      'img_photo' : 'https://static.pratique.fr/images/unsized/pe/peche-maquereau.jpg',
      'type' : 'Maquereau',
      'poids' : 0.3,
      'taille': 30,
      'lieu' : 'Cherbourg',
      'description' : 'Ma seule prise de la journée :/',
      'like' : 0,
      'comment' : []
    }
  ];


  $scope.toggleComments = function(id){
    if($scope.showComment != id)
      $scope.showComment = id;
    else
      $scope.showComment = -1;
  }

  $scope.validerComment = function(id, value){
    console.log(id);
    if(value == "" || value == undefined){
      $scope.error_message = "Veuillez remplir tous les champs";
    }
    else{
      $scope.error_message = undefined;
      console.log($scope.datas[id]);
      var tmp = {
        'id' : $scope.datas[id].comment.length,
        'author_prenom' : 'Clément',
        'author_nom' : 'Ignacio',
        'author_img' : 'img/clem.jpg',
        'content' : value,
        'heure' : new Date()
      };
      $scope.datas[id].comment.push(tmp);
      $scope.toto = "";
    }
  }
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

.controller('PictureCtrl', function($scope, $state,$location){
  $scope.goTo = function(){
    // $location.path('/board');
    $state.go('board');
  }
  console.log("Loaded");
})
.controller('BoardCtrl', function($scope, $state, $mdDialog, $mdToast){
  $scope.data = {
    'id' : 1,
    'prenom' : 'Jean Eude',
    'nom' : 'Pepou',
    'description' : 'Journée incroyable ! Regardez ce magnifique poisson ;)',
    'date' : '15 Octobre 2017',
    'img_photo' : 'img/peche1.jpg',
    'type' : 'Maquereau'
  }

  $scope.showModal = function(event){
    console.log($scope.data);
    if($scope.data.taille <= 20 ){
      var confirm = $mdDialog.confirm()
      .title("Réglementation")
      .textContent("La taille de ce poisson n'est pas en accord avec la réglementation")
      .targetEvent(event)
      .ok('Relacher')
      .cancel("réglementation");
      $mdDialog.show(confirm)
    }
    else{
      $mdToast.show(
        $mdToast.simple()
          .textContent("Votre poisson à bien été ajouté")
          .position("bottom")
          .hideDelay(3000)
      );
      $state.go('tab.dash');
    }
  }
})
;
