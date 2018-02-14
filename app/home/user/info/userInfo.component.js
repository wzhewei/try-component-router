angular.module("mainApp.home.user.info",[])
.component('userInfo', {

  bindings: { $router: '<' },

  controller: function(usersService,$uibModal){
    var self = this;
    self.user = null;

    self.$routerOnActivate = function(next){
      var userId = next.params.id;
      usersService.getUsers(userId-1).then(function(data){
        self.user = data;
      });
      self.userInfoModal();
    };

    self.userInfoModal = function(){
      var componentCtrl = this;
      $uibModal.open({
        templateUrl: './home/user/info/userInfo.html',
        controller: function(){
          this.ctrl = componentCtrl;
          this.submitForm = function($uibModalInstance){
            usersService.updateUsers(this.ctrl.user).then(function(){
              componentCtrl.$router.navigate(['Users']);
            })
          }
          this.cancelSubmit = function($uibModalInstance){
            componentCtrl.$router.navigate(['Users']);
          }
        },
        controllerAs: '$ctrl'
      })
    }
  }

});
