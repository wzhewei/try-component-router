var userList = angular.module('mainApp.home.user.usersComponent',[])
.component('users', {
   templateUrl: './home/user/users.html',
   bindings: {
     users: '<',
     userInfoModal: '&'
   }
});
