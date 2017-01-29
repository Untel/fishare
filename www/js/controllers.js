angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $rootScope) {
  $scope.showComment = -1;
  $scope.error_message = undefined;

  var getDate = function(time){
    var hh = time.getHours();
    var mn = Math.round(time.getMinutes());
    var ss = time.getSeconds();
    var dd = time.getDate();
    var mm = time.getMonth() + 1;
    return dd + '/' + mm + ' à ' + hh + ':' + mn + ':' + ss;
  }

  var doRefresh = function(){
    setTimeout(function(){
      console.log('Refreshing');
      $http({
        method: 'GET',
        url: '../../toAdd.json'
      }).then(function(res){
        console.log('found', res);
        $scope.timeFromLast = 'Actualisé le ' + getDate(new Date());
        $scope.datas.unshift(res.data[0]);
        $scope.$broadcast('scroll.refreshComplete');
        return;

      });
    }, 3000);
  }
  $scope.doRefresh = function(){
    doRefresh();
  }



  $scope.timeFromLast = 'Actualisé le ' + getDate(new Date());

  $scope.datas = [];
  $http({
    method: 'GET',
    url: '../../data.json'
  }).then(function(res){
    $scope.datas = res.data;
    $rootScope.datas = $scope.datas;
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

.controller('AccountCtrl', function($scope, $http, $state, $location) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.nbMois;
  $scope.principaux = [];
  $scope.prises = [];

  $scope.goPrise = function(id){
    $location.path('/prise/'+id);
  };

  $http({
    method: 'GET',
    url: '../../journal.json'
  }).then(function(res){
    $scope.nbMois = res.data.nbMois;
    $scope.principaux = res.data.principaux;
    $scope.prises = res.data.prises;
  });


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
})
.controller('PriseCtrl', function($scope, $state,$location){
  console.log("d");
})
.controller('BoardCtrl', function($scope, $state, $mdDialog, $mdToast, $http, $rootScope){
  $scope.data = {
    "prenom" : "Jack",
    "nom" : "Dupont",
    "pts" : 30,
    "date" : "29 Janvier 2017",
    "img_photo" : "img/fish_picture.jpg",
    "img_user": "img/jack.gif",
    "type" : "Mulet",
    "lieu": "Brest",
    "like": 0,
    "comment": []
  }
  data = $scope.data;
  $scope.showModal = function(event, value){
    var id;
    $scope.datas = [];
    if((!value.poids && !value.taille) || value.taille < 30){
      var confirm = $mdDialog.confirm()
      .title("Réglementation")
      .textContent("La taille de ce poisson n'est pas en accord avec la réglementation")
      .targetEvent(event)
      .ok('Relacher')
      .cancel("réglementation");
      $mdDialog.show(confirm)
    }
    else{
      console.log(value);
      $http({
        method: 'GET',
        url: '../../data.json'
      }).then(function(res){
        $scope.datas = res.data;
        id = $scope.datas[$scope.datas.length - 1].id;
        data["id"] = id++;
        data["taille"] = parseInt(value.taille);
        data["poids"] = parseInt(value.poids);
        data["description"] = value.description;
        $rootScope.datas.unshift(data);

        $mdToast.show(
          $mdToast.simple()
          .textContent("Votre poisson à bien été ajouté")
          .position("bottom")
          .hideDelay(3000)
        );
        $state.go('tab.dash');
      });


    }
  }
})
;
