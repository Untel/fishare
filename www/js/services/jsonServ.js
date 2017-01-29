angular.module('starter.services', [])
.service("JsonServ", function($http){
  return {
    getData: function () {
      return $http({
        method: 'GET',
        url: '../../data.json'
      }).then(function(res){
        return res.data;
      });
    },

    getLaw: function () {
      return $http({
        method: 'GET',
        url: '../../reglement.json'
      }).then(function(res){
        return res.data;
      });
    },
  }
})
