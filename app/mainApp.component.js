angular.module('mainApp',['ngComponentRouter',
'mainApp.home.user.usersService',
'mainApp.home.user.usersComponent',
'mainApp.home.user.info',
'ui.bootstrap'])

.config(function($locationProvider){
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'mainApp')

.component('mainApp', {
   templateUrl: './home/home.html',
   controller: function(usersService,$uibModal){
     var self = this;
     self.users = null;

     self.$onInit = function(){
       if(!self.users){
         usersService.getUsers().then(function(data){
           self.users = data;
         });
       }
     };

     self.userInfoModal = function(user){
       $uibModal.open({
         templateUrl: './userForm.html',
         controller: function(){
           this.user = user
           this.submitForm = function($uibModalInstance){
             usersService.updateUsers(this.user);
           }
         },
         controllerAs: '$ctrl'
       })
     }
   }
});
