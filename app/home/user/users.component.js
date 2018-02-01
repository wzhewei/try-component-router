var userList = angular.module('mainApp.home.user.usersComponent',[])
.component('users', {
   templateUrl: './home/user/users.html',
   controller: function(usersService){
     var self = this;
     self.users=null;
     self.$routerOnActivate = function(){
       usersService.getUsers().then(function(data){
         self.users = data;
       });
     }
   }
});
