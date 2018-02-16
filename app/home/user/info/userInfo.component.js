angular.module("mainApp.home.user.info",[])
.component('userInfo', {

  templateUrl: './home/user/info/userInfo.html',

  bindings: {
    user: '<',
    userInfoModal: '&'
  }

});
