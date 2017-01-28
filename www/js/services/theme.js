angular.module('starter.services', ['ngMaterial'])
.config(['$mdThemingProvider', function($mdThemingProvider) {
   $mdThemingProvider.theme('fishareTheme')
      .primaryPalette('cyan')
      .accentPalette('orange')
      .warnPalette('red')
      .backgroundPalette('grey')
}]);
