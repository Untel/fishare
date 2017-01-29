angular.module('starter.services', [])
.factory('JsonServ', function($http){
  console.log('enter');
  var getData = function () {
    return $http({
      method: 'GET',
      url: '../../data.json'
    }).then(function(res){
      console.log(res);
      return res.data;
    });
  };

  return { getData: getData };
});
