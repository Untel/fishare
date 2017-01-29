angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $scope.showComment = -1;
  $scope.error_message = undefined;
  $scope.datas = [];


  $scope.datas = [];
    $http({
      method: 'GET',
      url: '../../data.json'
    }).then(function(res){
      $scope.datas = res.data;
    });

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
        'author_prenom' : 'Jack',
        'author_nom' : 'Dupont',
        'author_img' : 'img/jack.jpg',
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
    if(!$scope.data.taille && $scope.data.poids && $scope.data.taille <= 20 ){
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
