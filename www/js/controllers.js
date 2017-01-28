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
      'pts' : 20,
      'img_user' : 'img/adrien.jpg',
      'img_photo' : 'https://static.pratique.fr/images/unsized/pe/peche-maquereau.jpg',
      'type' : 'Maquereau',
      'poids' : 0.3,
      'taille': 30,
      'lieu' : 'Cherbourg',
      'description' : 'Ma seule prise de la journée :/',
      'like' : 0,
      'comment' : 0
    }
  ];
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
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
  console.log('PictureCTRL loaded');
})
;
