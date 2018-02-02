var user = angular.module('mainApp.home.user.usersService', [])
.service('usersService', function($http) {

  this.getUsers = function getUsers (id) {
    return $http.get('/api/users/' + id).then(function (data) {
      return data.data;
    });
  };

});
