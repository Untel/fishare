angular.module('starter.services', [])
.factory("JsonServ", function($http){
  console.log('enter');
  var getData = function () {
    return $http({
      method: 'GET',
      url: '../../data.json'
    }).then(function(res){
      console.log(res);
      return res.data;
    });
  }

  // var getLaw = function () {
  //   return $http({
  //     method: 'GET',
  //     url: '../../reglement.json'
  //   }).then(function(res){
  //     return res.data;
  //   });
  // }

  console.log( getData());

  return {
    getData : getData()
  }

});
