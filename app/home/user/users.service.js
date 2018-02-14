var user = angular.module('mainApp.home.user.usersService', [])
.service('usersService', function($http) {

  this.getUsers = function getUsers (id) {
    return $http.get('/api/users/' + id).then(function (data) {
      return data.data;
    });
  };

  this.updateUsers = function updateUsers (user) {
    return $http.post('/api/users/add',{data:user}).then(function(){
      return;
    })
  }

});
