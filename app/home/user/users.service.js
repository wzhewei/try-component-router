var user = angular.module('mainApp.home.user.usersService', [])
.service('usersService', function($http) {

  this.getUsers = function getUsers (offset, limit, total) {
    return $http.get('/api/users/').then(function (data) {
      return data.data;
    });
  };

  this.getUserById = function getUserById(id){
    return $http.get("https://jsonplaceholder.typicode.com/users/" + id).then(function (data) {
      return data.data;
    });
  };

});
