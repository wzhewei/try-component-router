angular.module('mainApp',['ngComponentRouter',
'mainApp.home.user.usersService',
'mainApp.home.user.usersComponent',
'mainApp.home.user.info'])

.config(function($locationProvider){
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'mainApp')

.component('mainApp', {
   templateUrl: './home/home.html',
   $routeConfig: [
     {path: '/user-lists/', name: 'Users', component: 'users', useAsDefault:true},
     {path: '/user-lists/:id', name:'UserInfo', component: 'userInfo'}
   ]
});
