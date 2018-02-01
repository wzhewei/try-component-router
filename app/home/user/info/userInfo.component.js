angular.module("mainApp.home.user.info",[])
.component('userInfo', {

  templateUrl: './home/user/info/userInfo.html',

  bindings: { $router: '<' },

  controller: function(usersService){
    var self = this;
    self.user = null;

    self.$routerOnActivate = function(next){
      var userId = next.params.id;
      usersService.getUserById(userId).then(function(data){
        self.user = data;
      });
    };

    self.submitForm = function(){
      alert("Update User: " + self.user.name + "\n" + "Street: " +
      self.user.address.street + "\n" + "Suite: " +
      self.user.address.suite + "\n" + "City: " +
      self.user.address.city + "\n" + "Company Name: " +
      self.user.company.name);
      this.$router.navigate(['Users']);
    }
  }

});
